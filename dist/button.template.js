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
import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import '@spectrum/sp-icon';
export function standardButtontemplate() {
    const classes = {
        'spectrum-ActionButton': this.type === 'action',
        'spectrum-Button--cta': this.type === 'cta' || this.type === 'splitactioncta' || this.type === 'splittriggercta',
        'spectrum-Button--primary': this.type === 'primary' || this.type === 'splitactionprimary' || this.type === 'splittriggerprimary',
        'spectrum-Button--secondary': this.type === 'secondary' || this.type === 'splitactionsecondary' || this.type === 'splittriggersecondary',
        'spectrum-Button--warning': this.type === 'warning',
        'spectrum-Button--overBackground': this.type === 'over-background',
        'spectrum-SplitButton-action': this.type === 'splitactioncta' || this.type === 'splitactionprimary' || this.type === 'splitactionsecondary',
        'spectrum-SplitButton-trigger': this.type === 'splittriggercta' || this.type === 'splittriggerprimary' || this.type === 'splittriggersecondary',
        'spectrum-Button--quiet': this.quiet,
    };
    return html `
        <button class="spectrum-Button ${classMap(classes)}" ?disabled="${this.disabled}">
          ${this.icon ? html `<sp-icon class="spectrum-Icon" size="XS" name="${this.icon}"></sp-icon>` : ''}
          <span class="spectrum-Button-label">${this.label}</span>
        </button>`;
}
export function actionButtontemplate() {
    const classes = {
        'is-selected': this.selected,
        'spectrum-ActionButton--quiet': this.quiet,
    };
    return html `
      <button class="spectrum-ActionButton ${classMap(classes)}" ?disabled="${this.disabled}">
        ${this.icon ? html `<sp-icon class="spectrum-Icon" size="S" name="${this.icon}"></sp-icon>` : ''}
        <span class="spectrum-Button-label">${this.label}</span>
      </button>
      `;
}
export function clearButtontemplate() {
    const classes = {
        'spectrum-ClearButton--small': this.small,
    };
    return html `
      <button class="spectrum-ClearButton ${classMap(classes)}" ?disabled="${this.disabled}" type.="${this.type}">
        <sp-icon name="CrossSmall"></sp-icon>
      </button>
      `;
}
export function toolButtontemplate() {
    const classes = {
        'is-selected': this.selected
    };
    return html `
      <button class="spectrum-Tool ${classMap(classes)}" ?disabled="${this.disabled}">
        <sp-icon class="spectrum-Icon" size="S" name="${this.icon}"></sp-icon>
      </button>
      `;
}
//# sourceMappingURL=button.template.js.map