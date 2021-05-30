import { __decorate } from "tslib";
import { Component, Input } from '@angular/core';
let WritingComponent = class WritingComponent {
    constructor() {
    }
    formattingDate(data) {
        let dataToFormat = [data.getDay().toString(), data.getMonth().toString(), data.getFullYear().toString()];
        const delimiter = '.';
        for (let i = 0; i < dataToFormat.length; i++) {
            if (dataToFormat[i].length < 2)
                dataToFormat[i] = '0' + dataToFormat[i];
        }
        return dataToFormat[0] + delimiter + dataToFormat[1] + delimiter + dataToFormat[2];
    }
};
__decorate([
    Input()
], WritingComponent.prototype, "writing", void 0);
WritingComponent = __decorate([
    Component({
        selector: 'app-profile-article',
        templateUrl: './writing.component.html',
        styleUrls: ['./writing.component.scss']
    })
], WritingComponent);
export { WritingComponent };
//# sourceMappingURL=writing.component.js.map