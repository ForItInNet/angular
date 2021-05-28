import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthenticationService} from "../../../../services/authentication.service";

@Component({
  selector: 'app-registration-confirm',
  templateUrl: './registration-confirm.component.html',
  styleUrls: ['../../authentication.component.scss']
})
export class RegistrationConfirmComponent implements OnInit{

  confirmRegistration: FormGroup;

  constructor(private router: ActivatedRoute,
              private authenticationService: AuthenticationService)
  {}

  ngOnInit(): void
  {
    this.confirmRegistration = new FormGroup({
      code: new FormGroup({
        cellOne: new FormControl(''),
        cellTwo: new FormControl(''),
        cellThree: new FormControl(''),
        cellFour: new FormControl('')
      }),
      hash: new FormControl(this.router.snapshot.paramMap.get('hash')),
    });
  }


  public onKeyUp(input: HTMLInputElement): void
  {
    if(input.value.length > 1)
      this.changeValue(input);

    if(this.isAllFieldFill())
    {
      input.blur();
      this.confirm(this.getCode());
    }
    else if(input.value !== '' && (input.nextSibling as HTMLInputElement) !== null)
      (input.nextSibling as HTMLInputElement).focus();
  }

  private changeValue(input: HTMLInputElement): void
  {
    this.confirmRegistration.controls['code'].value[input.id] = input.value[1];
    input.value = input.value[1];
  }

  private isAllFieldFill(): boolean
  {
    let isAllFieldFill = true;
    Object.keys(this.confirmRegistration.controls['code'].value).forEach((key: string) => {
      if(this.confirmRegistration.controls['code'].value[key] === '')
        isAllFieldFill = false;
    });

    return isAllFieldFill;
  }

  private confirm(code: string): void
  {
    this.authenticationService.postConfirmRegistration({
      hash: this.confirmRegistration.controls['hash'].value,
      code: code,
    });
  }

  private getCode(): string
  {
    let code = String();
    Object.keys(this.confirmRegistration.controls['code'].value).forEach((key: string) => {
      let temp: string = this.confirmRegistration.controls['code'].value[key].toString();
      code += temp[temp.length - 1];
    });

    return code;
  }
}
