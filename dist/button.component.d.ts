import { Base } from '@spectrum/sp-base';
export declare class Button extends Base {
    static componentStyles: import("lit-element").CSSResult[];
    type: string;
    label: string;
    icon: string;
    selected: boolean;
    disabled: boolean;
    small: boolean;
    quiet: boolean;
    protected render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sp-button': Button;
    }
}
