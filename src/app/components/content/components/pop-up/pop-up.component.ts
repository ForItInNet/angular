import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormGroup} from "@angular/forms";


@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit, AfterViewInit
{
  static popUp: ElementRef;

  className = PopUpComponent;

  @ViewChild('popUp')
  temp: ElementRef;

  static form: FormGroup;
  static fun: any;
  static html: string;

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit(): void
  {
    PopUpComponent.form = new FormGroup({});
  }

  public static openPopUp(fun: any, html: string, title: string): void
  {
    this.fun = fun;
    this.popUp.nativeElement.querySelector('#popUpForm')
      .appendChild(document.createRange().createContextualFragment(html));
    this.popUp.nativeElement.style.display = 'flex';
    this.popUp.nativeElement.querySelector('#title').innerHTML = title;
  }

  public static onDisable(): void
  {
    this.close();
  }

  public static onSubmit()
  {
    let data = {};
    this.popUp.nativeElement.querySelectorAll('input, textarea, button').forEach((element) => {
      if(element.value !== null && element.value !== undefined && element.value !== '')
      {
        if(element.type == 'file')
        {
          console.log(element.value)
          data[element.name] = element.file[0];
        }
        else
          data[element.name] = element.value;
      }
    })

    this.fun(data);
    this.close();
  }

  private static close() //
  {
    this.popUp.nativeElement.style.display = 'none';
    this.popUp.nativeElement.querySelector('#popUpForm').innerHTML = '';
  }


  ngAfterViewInit(): void {
    PopUpComponent.popUp = this.temp;
  }
}
