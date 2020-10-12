/**
    @license
    Copyright 2020 EMEXAL All Rights Reserved.
    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at
        http://www.apache.org/licenses/LICENSE-2.0
    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
*/

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
