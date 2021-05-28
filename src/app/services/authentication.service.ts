import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {CookiesService} from "./cookies.service";
import {environment} from "../../environments/environment";
import {AppComponent} from "../app.component";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private http: HttpClient,
              private router: Router,
              private cookiesService: CookiesService) { }

  public getLogin(): void
  {
    this.http.get<any>('/login').subscribe();
  }

  public postLogin(data: any): void
  {
    console.log("postLogin");
    this.http.post<any>('/login', data).subscribe({
      next: data => {
        this.router.navigate(['/']);
        this.cookiesService.setCookie(environment.authenticationCookieName, data[environment.authenticationCookieName]);
        AppComponent.updateUser();
        },
      error: data => {
        console.log(data);
      }
    });
  }

  public postLogout(): void
  {
    console.log("postLogout");
    this.http.post<void>('/logout', {}).subscribe({
      next: data => {
        this.cookiesService.removeCookies(environment.authenticationCookieName);
        this.router.navigate(['/']);
        AppComponent.logout();
      },
      error: data => {
        console.log(data);
      }
    });
  }

  public getRegistration(): void
  {
    console.log("getRegistration");
    this.http.get('/registration').subscribe();
  }

  public postRegistration(data: any): void
  {
    console.log("postRegistration");
    this.http.post<any>('/registration', data).subscribe({
      next: data => {
        this.router.navigate(['/registration/confirm', {'hash': data['hash']}]);
      },
      error: data => {
        console.log(data)
      },
    })
  }

  public postConfirmRegistration(data: any): void
  {
    console.log("postConfirmRegistration");
    this.http.post<any>('/registration/confirm', data).subscribe({
      next: data => {
        this.router.navigate(['/']);
        this.cookiesService.setCookie(environment.authenticationCookieName, data[environment.authenticationCookieName]);
      },
      error: data => {
        console.log(data['error']);
      }
    });
  }
}
