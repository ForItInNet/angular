import {Component, OnInit} from '@angular/core';
import {User} from "./data/models/User";
import {CookieService} from "ngx-cookie-service";
import {UserService} from "./services/user.service";
import {CookiesService} from "./services/cookies.service";
import {environment} from "../environments/environment";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit
{
  protected static FUNCTIONS: any[] = [];
  protected static USER: User;
  protected static userService: UserService;
  protected static cookieService: CookiesService;


  constructor(private cookieService: CookiesService,
              private userService: UserService)
  {}

  ngOnInit(): void
  {
    AppComponent.userService = this.userService;
    AppComponent.cookieService = this.cookieService;
    AppComponent.updateUser();
  }

  public static getUser(fun): User
  {
    if(this.USER != undefined)
      fun(this.USER);

    this.FUNCTIONS.push(fun);

    return this.USER;
  }

  public static updateUser(): void
  {
    if(this.cookieService.hasCookie(environment.authenticationCookieName))
      this.userService.getProfile().subscribe(user => {
        AppComponent.USER = user;
        this.FUNCTIONS.forEach(fun => fun(user));
      });
  }

  public static logout(): void
  {
    this.USER = null;
    this.FUNCTIONS.forEach(fun => fun(undefined));
  }
}
