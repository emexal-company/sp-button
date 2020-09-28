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
import { DemoButton } from './demo-button.component';

import '@spectrum/sp-button';
import '@spectrum/sp-container';
import '@spectrum/sp-rule';

import '@spectrum/sp-demo';

export default function template(this: DemoButton) {
  return html`
    <sp-container>

      <sp-rule medium label="Button - Primary"></sp-rule>

      <sp-demo width="200">
        <pre><sp-button type="primary" label="Primary"></sp-button></pre>
      </sp-demo>
      <sp-demo width="200">
        <pre><sp-button type="primary" label="Primary Quiet" quiet></sp-button></pre>
      </sp-demo>
      <sp-demo width="200">
        <pre><sp-button type="primary" label="Primary Disabled" disabled ></sp-button></pre>
      </sp-demo>
      <sp-demo width="200">
        <pre><sp-button type="primary" label="Primary" icon="Asterisk"></sp-button></pre>
      </sp-demo>
      <sp-demo width="200">
        <pre><sp-button type="primary" label="Primary Quiet" icon="Asterisk" quiet></sp-button></pre>
      </sp-demo>
      <sp-demo width="200">
        <pre><sp-button type="primary" label="Primary Disabled" icon="Asterisk" disabled></sp-button></pre>
      </sp-demo>


      <sp-rule medium label="Button - Secondary"></sp-rule>

      <sp-demo width="200">
        <pre><sp-button type="secondary" label="Secondary"></sp-button></pre>
      </sp-demo>
      <sp-demo width="200">
        <pre><sp-button type="secondary" label="Secondary Quiet" quiet></sp-button></pre>
      </sp-demo>
      <sp-demo width="200">
        <pre><sp-button type="secondary" label="Secondary Disabled" disabled></sp-button></pre>
      </sp-demo>

      <sp-rule medium label="Button - CTA"></sp-rule>

      <sp-demo width="200">
        <pre><sp-button type="cta" label="CTA"></sp-button></pre>
      </sp-demo>
      <sp-demo width="200">
        <pre><sp-button type="cta" quiet label="CTA Quiet"></sp-button></pre>
      </sp-demo>
      <sp-demo width="200">
        <pre><sp-button type="cta" disabled label="CTA Disabled"></sp-button></pre>
      </sp-demo>

      <sp-rule medium label="Button - Warning"></sp-rule>

      <sp-demo width="200">
        <pre><sp-button type="warning" label="Warning"></sp-button></pre>
      </sp-demo>
      <sp-demo width="200">
        <pre><sp-button type="warning" quiet label="Warning Quiet"></sp-button></pre>
      </sp-demo>
      <sp-demo width="200">
        <pre><sp-button type="warning" disabled label="Warning Disabled"></sp-button></pre>
      </sp-demo>

      <sp-rule medium label="Button - Over Background"></sp-rule>

      <sp-demo width="200">
<pre><div style="background-color: rgb(15, 121, 125);">
  <sp-button type="over-background" label="OverBack"></sp-button>
</div></pre>
      </sp-demo>
      <sp-demo width="200">
<pre><div style="background-color: rgb(15, 121, 125);">
  <sp-button type="over-background" quiet label="OverBack Quiet"></sp-button>
</div></pre>
      </sp-demo>
      <sp-demo width="200">
<pre><div style="background-color: rgb(15, 121, 125);">
  <sp-button type="over-background" disabled label="OverBack Disabled"></sp-button>
</div></pre>
      </sp-demo>

      <sp-rule medium label="Button - Clear"></sp-rule>

      <sp-demo width="200">
        <pre><sp-button type="clear" label="Clear"></sp-button></pre>
      </sp-demo>
      <sp-demo width="200">
        <pre><sp-button type="clear" disabled label="Clear"></sp-button></pre>
      </sp-demo>

      <sp-rule medium label="Button - Action"></sp-rule>

      <sp-demo width="200">
        <pre><sp-button type="action" label="Action"></sp-button></pre>
      </sp-demo>
      <sp-demo width="200">
        <pre><sp-button type="action" selected label="Action"></sp-button></pre>
      </sp-demo>
      <sp-demo width="200">
        <pre><sp-button type="action" disabled label="Action"></sp-button></pre>
      </sp-demo>
      <sp-demo width="200">
        <pre><sp-button type="action" quiet label="Action"></sp-button></pre>
      </sp-demo>
      <sp-demo width="200">
        <pre><sp-button type="action" quiet selected label="Action"></sp-button></pre>
      </sp-demo>
      <sp-demo width="200">
        <pre><sp-button type="action" quiet disabled label="Action"></sp-button></pre>
      </sp-demo>
      <sp-demo width="200">
        <pre><sp-button type="action" selected label="Action" icon="Asterisk"></sp-button></pre>
      </sp-demo>
      <sp-demo width="200">
        <pre><sp-button type="action" disabled label="Action" icon="Asterisk"></sp-button></pre>
      </sp-demo>
      <sp-demo width="200">
        <pre><sp-button type="action" quiet label="Action" icon="Asterisk"></sp-button></pre>
      </sp-demo>

      </section>
    </sp-container>
  `;
}
