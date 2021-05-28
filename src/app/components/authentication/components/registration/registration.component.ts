import {Component, ElementRef, OnInit} from '@angular/core';
import {AuthenticationService} from "../../../../services/authentication.service";
import {FormControl, FormGroup} from "@angular/forms";
import {AbstractFormService} from "../registration-confirm/abstract.form.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['../../authentication.component.scss']
})
export class RegistrationComponent extends AbstractFormService
{

  constructor(private authenticationService: AuthenticationService)
  {
    super();
  }

  ngOnInit(): void
  {
    this.authenticationService.getRegistration()
    this.form = new FormGroup({
      name: new FormControl(),
      surname: new FormControl(),
      email: new FormControl(),
      password: new FormControl(),
      repeatPassword: new FormControl(),
    });
  }

  public onSubmit(): void
  {
    this.authenticationService.postRegistration(this.form.getRawValue());
  }
}
