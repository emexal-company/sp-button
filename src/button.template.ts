
import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';

import '@spectrum/sp-icon';
import { Button } from './button.component';

export function standardButtontemplate(this: Button) {
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

    return html`
        <button class="spectrum-Button ${classMap(classes)}" ?disabled="${this.disabled}">
          ${this.icon ? html`<sp-icon class="spectrum-Icon" size="XS" name="${this.icon}"></sp-icon>` : ''}
          <span class="spectrum-Button-label">${this.label}</span>
        </button>`;
}

export function actionButtontemplate(this: Button) {
  const classes = {
      'is-selected': this.selected,
      'spectrum-ActionButton--quiet': this.quiet,
  };

  return html`
      <button class="spectrum-ActionButton ${classMap(classes)}" ?disabled="${this.disabled}">
        ${this.icon ? html`<sp-icon class="spectrum-Icon" size="S" name="${this.icon}"></sp-icon>` : ''}
        <span class="spectrum-Button-label">${this.label}</span>
      </button>
      `;
}

export function clearButtontemplate(this: Button) {
  const classes = {
    'spectrum-ClearButton--small': this.small,
  };

  return html`
      <button class="spectrum-ClearButton ${classMap(classes)}" ?disabled="${this.disabled}" type.="${this.type}">
        <sp-icon name="CrossSmall"></sp-icon>
      </button>
      `;
}

export function toolButtontemplate(this: Button) {
  const classes = {
      'is-selected': this.selected
  };

  return html`
      <button class="spectrum-Tool ${classMap(classes)}" ?disabled="${this.disabled}">
        <sp-icon class="spectrum-Icon" size="S" name="${this.icon}"></sp-icon>
      </button>
      `;
}