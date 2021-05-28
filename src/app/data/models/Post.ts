import {Writing, WritingType} from "../interfaces/Writing";

export class Post extends Writing
{

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
      data.postComments,
      WritingType.POST
    );
  }
}
