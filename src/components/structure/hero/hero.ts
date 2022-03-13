import { html, TemplateResult, CSSResultGroup, LitElement, css, unsafeCSS, CSSResult } from 'lit';
import { customElement, property, queryAll, queryAssignedNodes } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import style from './hero.scss';

@customElement('cba-hero')
export class Hero extends LitElement {

  static get styles() {
    return [style];
  }

  @property({ type: String })
  heroImageUrl = '';
  

  render(): TemplateResult {
    return html`
    <div class="bg-image" style="background-image: ${this.heroImageUrl}">
      <div class="banner-content-wrapper">
          <div class="hero-text">
            <h1><slot name="header"></slot></h1>
            <div class="horizontal-line" aria-hidden="true"></div>
            <h4><slot name="subText"></slot></h4>
          </div>
      </div>
    </div>`  
    ;
  }
}