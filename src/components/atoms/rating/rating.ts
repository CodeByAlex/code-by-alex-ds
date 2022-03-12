import { html, TemplateResult, CSSResultGroup, LitElement, css, unsafeCSS, CSSResult } from 'lit';
import { customElement, property, queryAll, queryAssignedNodes } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import style from './rating.scss';

@customElement('cba-rating')
export class Rating extends LitElement {

  static get styles() {
    return [style];
  }

  @property({ type: Number })
  value: Number = 0;

  render(): TemplateResult {
    return html`
    <span>
      ${[...Array(5)].map((_, i) => html`
      <span id="rating-star" class=${classMap({
          'star-icon': true,
          'star-icon-empty': i+1 > this.value,
          'star-icon-full': i-1 < this.value || i=== this.value,
          })}☆</span>`)}
    </span>`
    ;
  }
}