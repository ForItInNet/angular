import {Component, ElementRef, OnInit} from '@angular/core';
import {AuthenticationService} from "../../../../services/authentication.service";
import {FormControl, FormGroup} from "@angular/forms";
import {AbstractFormService} from "../registration-confirm/abstract.form.service";

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['../../authentication.component.scss']
})
export class AuthorizationComponent extends AbstractFormService implements OnInit{

  readonly link = "http://localhost:4200/authorithation";

  constructor(private authenticationService: AuthenticationService)
  {
    super();
  }

  ngOnInit(): void
  {
    this.authenticationService.getLogin();
    this.form = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
      'remember-me': new FormControl(false),
    });
  }

  public onSubmit(): void
  {
    this.authenticationService.postLogin(this.form.getRawValue());
  }

  public onRememberMe(checkbox: HTMLInputElement): void
  {
    if(checkbox.value == "on")
    {
      checkbox.value = "off";
      this.form.controls['remember-me'].setValue(false);
    }
    else
    {
      checkbox.value = "on";
      this.form.controls['remember-me'].setValue(true);
    }
  }
}
