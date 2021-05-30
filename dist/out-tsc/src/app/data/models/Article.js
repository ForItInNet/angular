import { Writing, WritingType } from "../interfaces/Writing";
export class Article extends Writing {
    constructor(id, title, text, likeNumber, dislikeNumber, viewNumber, commentNumber, isDraft, userId, publishDate) {
        super(id, title, text, likeNumber, dislikeNumber, viewNumber, commentNumber, userId, publishDate, WritingType.ARTICLE);
        this._isDraft = isDraft;
    }
    get isDraft() {
        return this._isDraft;
    }
}
//# sourceMappingURL=Article.js.map