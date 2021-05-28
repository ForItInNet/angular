import {WritingComment} from "../models/WritingComment";
import {ModelEntity} from "./ModelEntity";
import {ShortUser} from "../models/ShortUser";

export class Writing extends ModelEntity
{
  public title: string;
  public text: string;
  public likeNumber: number;
  public dislikeNumber: number;
  public viewNumber: number;
  public currentUserEmotion: WritingEmotion;
  public publishDate: Date;
  public author: ShortUser;
  public comments: WritingComment[];
  public type: string;


  constructor(entityToken: string, title: string, text: string, likeNumber: number, dislikeNumber: number, viewNumber: number, currentUserEmotion: WritingEmotion, publishDate: Date, author: ShortUser, comments: any, type: string) {
    super(entityToken);
    this.title = title;
    this.text = text;
    this.likeNumber = likeNumber;
    this.dislikeNumber = dislikeNumber;
    this.viewNumber = viewNumber;
    this.currentUserEmotion = currentUserEmotion;
    this.publishDate = publishDate;
    this.author = author;
    this.comments = [];

    if(comments != undefined)
      comments.forEach(comment => {
        this.comments.push(new WritingComment(comment.entityTokent, new ShortUser(comment.author), comment.comment,
          comment.likeNumber, comment.dislikeNumber, comment.publishDate, []))
      });

    this.type = type;
  }
}

export enum WritingType
{
  ARTICLE= "ARTICLE",
  POST = "POST",
  NEW = "NEW"
}

export enum WritingEmotion
{
  LIKE= "LIKE",
  DISLIKE = "DISLIKE",
  VIEW = "VIEW"
}
