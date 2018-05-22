
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class VisionView2 extends PolymerElement {
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
        <h1>View Two</h1>
      </div>
    `;
  }
}

window.customElements.define('vision-view2', VisionView2);