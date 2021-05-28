import {Writing, WritingType} from "../interfaces/Writing";
import {WritingComment} from "./WritingComment";
import {User} from "./User";

export class Article extends Writing
{
  readonly draft: boolean;

  constructor(data)
  {
    super(
      data.id,
      data.title,
      data.text,
      data.postReactions.likes,
      data.postReactions.dislikes,
      data.postReactions.views,
      data.emotion,
      data.publishDate,
      data.authorEntityToken,
      data.comments,
      WritingType.ARTICLE
      );
    this.draft = data.draft;
  }
}
