import { html, TemplateResult, CSSResultGroup, LitElement, css, unsafeCSS, CSSResult } from 'lit';
import { customElement, property, queryAll, queryAssignedNodes } from 'lit/decorators.js';
import style  from './button.scss';
export type ButtonVariant = 'none' | 'primary' | 'secondary' | 'tertiary';
/**
 * The Outline Button component
 * @slot - The default, and only slot for this element.
 */
@customElement('cba-button')
export class Button extends LitElement {

  static get styles() {
    return [ style ];
  }

  /**
   * The button style variant to use.
   */
  @property({ type: String })
  variant: ButtonVariant = 'primary';

  /**
   * Whether the button is disabled
   */
  @property({ type: Boolean }) isDisabled = false;

  /**
   * A click handler to be passed only to onClick. DO NOT USE @click on this component.
   */
  @property() onClick: () => void;

  /**
   * A keyUp handler to be passed to the onKeyUp. DO NOT USE @keyup on this component.
   */
  @property() onKeyUp: () => void;
 
  updated() {
    // checks the isDisabled prop and manages aria-disabled attribues on the <cba-button> element itself.
    if (this.hasAttribute('isDisabled')) {
      this.setAttribute('aria-disabled', 'true');
    } else {
      this.setAttribute('aria-disabled', 'false');
    }
  }

  render(): TemplateResult {
    return html`<button class="button ${this.variant}"
                  aria-disabled="${this.isDisabled}"
                  .onclick="${this.onClick}"
                  .onkeyup="${this.onKeyUp}">
                  <slot></slot>
                </button> `;
  }
}