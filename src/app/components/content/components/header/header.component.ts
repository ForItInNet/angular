import {Component, OnInit} from '@angular/core';
import {User} from "../../../../data/models/User";
import {AppComponent} from "../../../../app.component";
import {CookiesService} from "../../../../services/cookies.service";
import {environment} from "../../../../../environments/environment";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss', '../../content.component.scss']
})
export class HeaderComponent implements OnInit {

  public user: User;

  constructor(private cookiesService: CookiesService) { }

  ngOnInit(): void
  {
    AppComponent.getUser((user) => {
      this.user = user;
    });
  }

}
