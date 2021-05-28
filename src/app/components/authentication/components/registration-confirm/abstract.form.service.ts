import {FormGroup} from "@angular/forms";

export abstract class AbstractFormService
{

  classNameForLabel = "active";

  form: FormGroup;

  public onFocus(block: HTMLDivElement): void
  {
    block.classList.add(this.classNameForLabel);
    console.log(this.form.controls);
  }

  public onBlur(block: HTMLDivElement): void
  {
    if((block.lastElementChild as HTMLInputElement).value === '')
      block.classList.remove(this.classNameForLabel);
  }
}
