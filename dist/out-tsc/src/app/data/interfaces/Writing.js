export class Writing {
    constructor(id, title, text, likeNumber, dislikeNumber, viewNumber, commentNumber, userId, publishDate, type) {
        this._id = id;
        this._title = title;
        this._text = text;
        this._likeNumber = likeNumber;
        this._dislikeNumber = dislikeNumber;
        this._viewNumber = viewNumber;
        this._commentNumber = commentNumber;
        this._userId = userId;
        this._publishDate = publishDate;
        this._type = type;
    }
    get id() {
        return this._id;
    }
    get title() {
        return this._title;
    }
    get text() {
        return this._text;
    }
    get likeNumber() {
        return this._likeNumber;
    }
    get dislikeNumber() {
        return this._dislikeNumber;
    }
    get viewNumber() {
        return this._viewNumber;
    }
    get commentNumber() {
        return this._commentNumber;
    }
    get userId() {
        return this._userId;
    }
    get publishDate() {
        return this._publishDate;
    }
    get type() {
        return this._type;
    }
}
export var WritingType;
(function (WritingType) {
    WritingType["ARTICLE"] = "\u0421\u0442\u0430\u0442\u0442\u044F";
    WritingType["POST"] = "\u041F\u043E\u0441\u0442";
})(WritingType || (WritingType = {}));
//# sourceMappingURL=Writing.js.map