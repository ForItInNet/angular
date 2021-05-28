import {Component, ElementRef, Host, Input, OnInit, ViewChild} from '@angular/core';
import {Writing, WritingEmotion} from "../../../../../../../../data/interfaces/Writing";
import {PopUpComponent} from "../../../../../pop-up/pop-up.component";
import {WritingService} from "../../../../../../../../services/writing.service";
import {BlogComponent} from "../../blog.component";

@Component({
  selector: 'app-blog-writing',
  templateUrl: './blog-writing.component.html',
  styleUrls: ['./blog-writing.component.scss']
})
export class BlogWritingComponent implements OnInit {

  @Input()
  public writing: Writing;

  public writingEmotion = WritingEmotion;

  protected menuOpened: boolean = false;
  public commentsOpened: boolean = false;

  constructor(private elementRef: ElementRef,
              private writingService: WritingService,
              @Host() private parent: BlogComponent) { }

  ngOnInit(): void
  {}

  public onClickMenu(element: HTMLUListElement): void
  {
    if(!this.menuOpened)
      element.style.display = "block";
    else
      element.style.display = "none";

    this.menuOpened = !this.menuOpened;
  }

  public onMenuBlur(element: HTMLUListElement): void
  {
    if(this.menuOpened)
    {
      //element.style.display = "none";
      //this.menuOpened = false;
    }
  }

  public deletePost(entityToken: string): void
  {
    let fun = (data: any) => {
      this.writingService.deleteUserPost(entityToken).subscribe({
        next: data => {
          this.parent.deleteWriting(entityToken);
        },
        error: data => {
          console.log(data)
        }
      })
    }

    PopUpComponent.openPopUp(fun, this.removePostPopUpHtml, "Видалити допис")
  }

  public setEmotion(like: HTMLButtonElement,
                    dislike: HTMLButtonElement,
                    writingEmotion: WritingEmotion): void
  {
    if(writingEmotion === WritingEmotion.LIKE)
    {
      if(this.writing.currentUserEmotion == WritingEmotion.LIKE)
      {
        --this.writing.likeNumber;
        this.writing.currentUserEmotion = WritingEmotion.VIEW
      }
      else
      {
        if(this.writing.currentUserEmotion == WritingEmotion.DISLIKE)
          --this.writing.dislikeNumber

        ++this.writing.likeNumber
        this.writing.currentUserEmotion = WritingEmotion.LIKE;
      }
    }
    else if(writingEmotion === WritingEmotion.DISLIKE)
    {
      if(this.writing.currentUserEmotion == WritingEmotion.DISLIKE)
      {
        --this.writing.dislikeNumber;
        this.writing.currentUserEmotion = WritingEmotion.VIEW
      }
      else
      {
        if(this.writing.currentUserEmotion == WritingEmotion.LIKE)
          --this.writing.likeNumber

        ++this.writing.dislikeNumber
        this.writing.currentUserEmotion = WritingEmotion.DISLIKE
      }
    }

    this.writingService.setPostEmotion(
      {
        'entityToken': this.writing.entityToken,
        'emotion': writingEmotion
      }
    );
  }

  protected removePostPopUpHtml = "<div class=\"popUp__body\">\n" +
    "  <p class=\"body__message\">\n" +
    "    Ви дійсно хочите видалити допис?\n" +
    "  </p>\n" +
    "  <div class=\"body__button\">\n" +
    "    <button class=\"button\" type=\"submit\">Видалити</button>\n" +
    "  </div>\n" +
    "</div>";
}
