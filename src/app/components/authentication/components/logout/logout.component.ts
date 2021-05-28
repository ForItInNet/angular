import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../../../../services/authentication.service";
import {CookiesService} from "../../../../services/cookies.service";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
})
export class LogoutComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService,
              private cookiesService: CookiesService) { }

  ngOnInit(): void
  {
    this.authenticationService.postLogout();
    this.cookiesService.removeCookies("X-Authentication-Token");
  }

}
