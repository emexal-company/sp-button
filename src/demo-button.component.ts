import { PageViewElement } from '@components/page-view-element';
import { customElement, query } from 'lit-element';

import styles from './demo-button.styles';
import template from './demo-button.template';

// These are the shared styles needed by this element.
import sharedStyles from '@components/shared.styles';
import { Button } from '@spectrum/sp-button';
import { Spectrum } from '@spectrum/config/spectrum-config';

import Prism from "prismjs";

@customElement('demo-button')
export class DemoButton extends PageViewElement {

  public static styles = [sharedStyles, styles];

  protected render() {
    return template.call(this);
  }

  protected firstUpdated() {
    Prism.highlightAllUnder(this.shadowRoot);
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'demo-button': DemoButton;
  }
}
