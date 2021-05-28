import {HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {Injectable} from "@angular/core";
import {CookiesService} from "./cookies.service";

@Injectable()
export class Interceptors implements HttpInterceptor{

  constructor(private cookies: CookiesService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>
  {
    let http = req.clone({
      url: environment.apiBaseUrl + req.url,
      setHeaders:
        {
          //'Content-Type': 'application/json',
          'X-Requested-With': 'XMLHttpRequest',
          'X-Authentication-Token': this.cookies.getCookie(environment.authenticationCookieName),
          '_csrf': this.cookies.getCookie(environment.csrf),
        },
      withCredentials: true
    });

    return next.handle(http);
  }
}
