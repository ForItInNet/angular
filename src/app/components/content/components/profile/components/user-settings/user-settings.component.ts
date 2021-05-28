import { Component, OnInit } from '@angular/core';
import {AuthenticationToken} from "../../../../../../data/models/AuthenticationToken";
import {UserService} from "../../../../../../services/user.service";

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html',
  styleUrls: ['./user-settings.component.scss', '../../../../content.component.scss']
})
export class UserSettingsComponent implements OnInit {

  public tokens: AuthenticationToken[];

  constructor(private userService: UserService) { }

  ngOnInit(): void
  {
    this.userService.getAuthenticationTokens().subscribe(data => {
      this.tokens = data;
    });
  }

}
