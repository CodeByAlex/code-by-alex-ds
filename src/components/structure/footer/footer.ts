import { html, TemplateResult, CSSResultGroup, LitElement, css, unsafeCSS, CSSResult } from 'lit';
import { customElement, property, queryAll, queryAssignedNodes } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import style from './footer.scss';

@customElement('cba-footer')
export class Rating extends LitElement {

  static get styles() {
    return [style];
  }

  @property({ type: String })
  state: String = 'Baltimore';

  render(): TemplateResult {
    return html`
      <footer class="footer-panel">
        <div><slot></slot></div>
        <div class="footer-text">Built in Baltimore</div>
      </footer>`
    ;
  }
}