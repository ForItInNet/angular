import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {CookieService} from "ngx-cookie-service";
import {HttpXsrfTokenExtractor} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CookiesService {

  constructor(private cookie: CookieService,
              private tokenExtractor: HttpXsrfTokenExtractor) { }



  public getCsrfFromCookie(): string
  {
    return this.tokenExtractor.getToken();
  }

  public setCookie(name: string, cookie: string): void
  {
    this.cookie.set(name, cookie, null, '/');
  }

  public getCookie(name: string): string
  {
    return this.cookie.get(name);
  }

  public removeCookies(name: string): void
  {
    this.cookie.delete(name);
  }

  public hasCookie(name: string): boolean
  {
    return this.cookie.check(name);
  }
}
