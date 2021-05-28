import {Writing, WritingType} from "../interfaces/Writing";
import {User} from "./User";
import {WritingComment} from "./WritingComment";

export class New extends Writing
{
  readonly draft: boolean;

  constructor(data)
  {
    super(
      data.entityToken,
      data.title,
      data.text,
      data.postReactions.likes,
      data.postReactions.dislikes,
      data.postReactions.views,
      data.emotion,
      data.publishDate,
      data.authorEntityToken,
      data.comments,
      WritingType.NEW
    );
    this.draft = data.draft;
  }
}
