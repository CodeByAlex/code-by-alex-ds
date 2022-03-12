import { html, TemplateResult, CSSResultGroup, LitElement, css, unsafeCSS, CSSResult } from 'lit';
import { customElement, property, queryAll, queryAssignedNodes } from 'lit/decorators.js';
import style from './button.scss';
export type ButtonVariant =  'primary' | 'success' | 'info' | 'warning' | 'danger';

@customElement('cba-button')
export class Button extends LitElement {

  static get styles() {
    return [style];
  }

  /**
   * Button variant type that influences the button's style
   */
  @property({ type: String })
  variant: ButtonVariant = 'primary';

  @property() onClick: () => void;

  render(): TemplateResult {
    return html`<button class="button button-${this.variant}"
                  .onclick="${this.onClick}">
                  <slot></slot>
                </button> `;
  }
}