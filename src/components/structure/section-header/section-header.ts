import { html, TemplateResult, CSSResultGroup, LitElement, css, unsafeCSS, CSSResult } from 'lit';
import { customElement, property, queryAll, queryAssignedNodes } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import style from './section-header.scss';

@customElement('cba-section-header')
export class SectionHeader extends LitElement {

  static get styles() {
    return [style];
  }

  render(): TemplateResult {
    return html`
      <div>
        <h1 class="header"><slot></slot></h1>
        <hr class="horizontal-row" role="presentation">
      </div>`
    ;
  }
}