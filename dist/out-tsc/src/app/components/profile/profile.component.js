import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { User } from "../../data/models/User";
let ProfileComponent = class ProfileComponent {
    constructor() {
        this.user = new User(1, true, new Date(), "email.gmail.com", 1, new Date(), "Myhailo", "Dmytrash");
    }
    ngOnInit() {
    }
};
ProfileComponent = __decorate([
    Component({
        selector: 'app-profile',
        templateUrl: './profile.component.html',
        styleUrls: ['./profile.component.scss']
    })
], ProfileComponent);
export { ProfileComponent };
//# sourceMappingURL=profile.component.js.map