import { __decorate, __metadata } from "tslib";
import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import buttonStyles from './button.styles';
import { actionButtontemplate, clearButtontemplate, standardButtontemplate, toolButtontemplate } from './button.template';
let Button = class Button extends Base {
    constructor() {
        super(...arguments);
        this.type = '';
        this.label = '';
        this.icon = '';
        this.selected = false;
        this.disabled = false;
        this.small = false;
        this.quiet = false;
    }
    render() {
        if (this.type === 'action') {
            return actionButtontemplate.call(this);
        }
        else if (this.type === 'clear') {
            return clearButtontemplate.call(this);
        }
        else if (this.type === 'tool') {
            return toolButtontemplate.call(this);
        }
        else {
            return standardButtontemplate.call(this);
        }
    }
};
Button.componentStyles = [buttonStyles];
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], Button.prototype, "type", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], Button.prototype, "label", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], Button.prototype, "icon", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Button.prototype, "selected", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Button.prototype, "disabled", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Button.prototype, "small", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Button.prototype, "quiet", void 0);
Button = __decorate([
    customElement('sp-button')
], Button);
export { Button };
//# sourceMappingURL=button.component.js.map