
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class VisionView1 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <div class="circle">1</div>
        <h1>View One</h1>
      </div>
    `;
  }
}

window.customElements.define('vision-view1', VisionView1);