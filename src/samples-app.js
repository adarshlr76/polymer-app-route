import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import '@polymer/app-route/app-location.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-pages/iron-pages.js';
import '@polymer/iron-selector/iron-selector.js';


/**
 * @customElement
 * @polymer
 */
class SamplesApp extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <app-location route="{{route}}">
      </app-location>

      <app-route route="{{route}}" pattern="/:page" data="{{routeData}}" >
      </app-route>
      <iron-selector selected="[[page]]" attr-for-selected="name" >
      <a name="view1" href="[[rootPath]]view1">View One</a>
      <a name="view2" href="[[rootPath]]view2">View Two</a>
      <a name="view3" href="[[rootPath]]view3">View Three</a>
    </iron-selector>

    <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
      <vision-view1 name="view1"></vision-view1>
      <vision-view2 name="view2"></vision-view2>
      <vision-view3 name="view3"></vision-view3>
      <vision-view404 name="view404"></vision-view404>
    </iron-pages>

    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'samples-app'
      },
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged'
      },
      routeData: {
        type : Object,
        observer : '_routePageChanged'
      }
    };
  }

  _pageChanged(page) {
    console.log(page);
    let context = this;
    switch (page) {
      case 'view1':
        console.log("hello view 1");
        import('./vision-view1.js').then(null, context._showPage404.bind(context));
        break;
      case 'view2':
        import('./vision-view2.js').then(null, context._showPage404.bind(context));
        break;
      case 'view3':
        import('./vision-view3.js').then(null, context._showPage404.bind(context));
        break;
      case 'view404':
        import('./vision-view404.js');
        break;
    }
  }
  _showPage404() {
    this.page = 'view404';
  }
  _routePageChanged(routeData) {
    //console.log(routeData.page);
    var page = routeData.page;
    if (!page) {
      this.page = 'view1';
    } else if (page === 'view1') {
      this.page = page;
    }else if (page === 'view2') {
      this.page = page;
    }else if (page === 'view3') {
      this.page = page;
    }
    else {
      this.page = 'view404';
    }
    
  }

}

window.customElements.define('samples-app', SamplesApp);
