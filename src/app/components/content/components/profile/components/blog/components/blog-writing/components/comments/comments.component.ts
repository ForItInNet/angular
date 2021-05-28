import {Component, Input, OnInit} from '@angular/core';
import {WritingComment} from "../../../../../../../../../../data/models/WritingComment";
import {FormControl, FormGroup} from "@angular/forms";
import {WritingService} from "../../../../../../../../../../services/writing.service";

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  @Input()
  public writingEntityToken: string;

  @Input()
  public comments: WritingComment[];

  addComment: FormGroup;

  constructor(private writingService: WritingService) { }

  ngOnInit(): void
  {
    this.addComment = new FormGroup({
      text: new FormControl()
    });
  }

  public onAddComment(): void
  {
    this.writingService.addPostComment(this.writingEntityToken, this.addComment.getRawValue().text)
      .subscribe({
        next: data => {
          this.comments.push(data);
        }
      });

    this.addComment.reset();
  }

}
