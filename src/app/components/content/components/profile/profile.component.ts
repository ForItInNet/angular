import {Component, OnDestroy, OnInit} from '@angular/core';
import {UserService} from "../../../../services/user.service";
import {User} from "../../../../data/models/User";
import {PopUpComponent} from "../pop-up/pop-up.component";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs";
import {AppComponent} from "../../../../app.component";
import {WritingService} from "../../../../services/writing.service";
import {ShortUser} from "../../../../data/models/ShortUser";


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss', '../../content.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy{

  public user: User;
  public currentUser: boolean;
  public section: string = 'BLOG';

  protected callFunctionAfterLoaded: any[] = [];

  constructor(private userService: UserService,
              private route: ActivatedRoute,
              private writingService: WritingService)
  {}

  public getUserWritings(fun): void
  {
    if(this.user == undefined || this.user.writings == undefined)
    {
      this.callFunctionAfterLoaded.push(fun);
    }
    else
      fun(this.user.writings);
  }

  protected loadWritings(): void
  {
    this.writingService.getUserWritingByEntityToken(this.user.entityToken)
      .subscribe(data => {
        this.user.writings = data;
        this.setWritings();
      });
  }

  protected setWritings(): void
  {
    this.callFunctionAfterLoaded.forEach(fun => fun(this.user.writings));
  }

  ngOnInit(): void
  {
    let entityToken = this.route.snapshot.params['id'];

    if(entityToken == undefined)
    {
      AppComponent.getUser(user => {
        this.user = user;
        this.loadWritings();
      });
      this.currentUser = true;
    }
    else
    {
      this.userService.getUserProfileByEntityToken(entityToken).subscribe({
        next: user => {
          this.user = user;
          this.loadWritings();
        },
        error: data => {
          console.log(data);
        }
      })
      this.currentUser = false;
    }
  }

  public clickFollow(): void
  {
    this.userService.follow(this.user.entityToken);
    let user = AppComponent.getUser(data => {});
    this.user.followers.push(new ShortUser(user));
    user.followings.push(this.user);
  }

  public imgHover(element: any)
  {
    element.classList.add('user-img__change-active');
  }

  public imgBlur(element: any)
  {
    element.classList.remove('user-img__change-active');
  }

  public setImg(element: HTMLInputElement)
  {
    const file: File = element.files[0];
    let formData = new FormData();
    formData.append('file', file, file.name);
    this.userService.setUserImg(formData).subscribe(data => {
        this.user.userImg = data.imgId;
    });
  }

  ngOnDestroy(): void
  {
    this.user.writings = undefined;
  }

  private setImgPopUpHtml = "<input type=\"file\" name=\"file\">\n" +
    "            <button type=\"submit\">send</button>";

}
