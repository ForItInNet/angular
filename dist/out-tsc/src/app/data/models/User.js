export class User {
    constructor(id, active, dataOfBirthday, email, gender, lastOnline, name, surname) {
        this._id = id;
        this._active = active;
        this._dataOfBirthday = dataOfBirthday;
        this._email = email;
        this._gender = gender;
        this._lastOnline = lastOnline;
        this._name = name;
        this._surname = surname;
    }
    get id() {
        return this._id;
    }
    get active() {
        return this._active;
    }
    get dataOfBirthday() {
        return this._dataOfBirthday;
    }
    get email() {
        return this._email;
    }
    get gender() {
        return this._gender;
    }
    get lastOnline() {
        return this._lastOnline;
    }
    get name() {
        return this._name;
    }
    get surname() {
        return this._surname;
    }
}
//# sourceMappingURL=User.js.map