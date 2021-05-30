import { Writing, WritingType } from "../interfaces/Writing";
export class Post extends Writing {
    constructor(id, title, text, likeNumber, dislikeNumber, viewNumber, commentNumber, userId, publishDate) {
        super(id, title, text, likeNumber, dislikeNumber, viewNumber, commentNumber, userId, publishDate, WritingType.POST);
    }
}
//# sourceMappingURL=Post.js.map