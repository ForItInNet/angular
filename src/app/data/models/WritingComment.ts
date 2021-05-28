import {ModelEntity} from "../interfaces/ModelEntity";
import {ShortUser} from "./ShortUser";

export class WritingComment extends ModelEntity
{
  public author: ShortUser;
  public comment: string;
  public likeNumber: number;
  public dislikeNumber: number;
  public publishDate: Date;
  public answers: WritingComment[];


  constructor(entityToken: string, author: ShortUser, comment: string, likeNumber: number, dislikeNumber: number, publishDate: Date, answers: any) {
    super(entityToken);
    this.author = new ShortUser(author);
    this.comment = comment;
    this.likeNumber = likeNumber;
    this.dislikeNumber = dislikeNumber;
    this.publishDate = publishDate;
    this.answers = answers;
  }
}
