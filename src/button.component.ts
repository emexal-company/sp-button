import { customElement, property } from 'lit-element';

import { Base } from '@spectrum/sp-base';

import buttonStyles from './button.styles';
import { actionButtontemplate, clearButtontemplate, standardButtontemplate, toolButtontemplate } from './button.template';

@customElement('sp-button')
export class Button extends Base {
  public static componentStyles = [ buttonStyles ];

  @property({ type: String }) public type: string = '';
  @property({ type: String }) public label: string = '';
  @property({ type: String }) public icon: string = '';
  @property({ type: Boolean }) public selected: boolean = false;
  @property({ type: Boolean }) public disabled: boolean = false;
  @property({ type: Boolean }) public small: boolean = false;
  @property({ type: Boolean }) public quiet: boolean = false;

  protected render() {
    if (this.type === 'action') {
      return actionButtontemplate.call(this);
    } else if (this.type === 'clear') {
      return clearButtontemplate.call(this);
    } else if (this.type === 'tool') {
      return toolButtontemplate.call(this);
    } else {
      return standardButtontemplate.call(this);
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-button': Button;
  }
}
