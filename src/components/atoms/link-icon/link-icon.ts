import { html, TemplateResult, CSSResultGroup, LitElement, css, unsafeCSS, CSSResult } from 'lit';
import { customElement, property, queryAll, queryAssignedNodes } from 'lit/decorators.js';
import style from './link-icon.scss';

@customElement('cba-link-icon')
export class LinkIcon extends LitElement {

  static get styles() {
    return [style];
  }

  @property({ type: String })
  logoTitle: String = '';

  @property({ type: String })
  url: String = '';

  @property({ type: String })
  imageUrl: String = '';


  getId = (linkTitle: String) => {
    const transformedLinkTitle = linkTitle && linkTitle ? linkTitle.toLowerCase().replace(' ', '-') : '';
    return `${transformedLinkTitle}`
  }

  render(): TemplateResult {
    return html`<a id="${this.getId(this.logoTitle)}-link" href="${this.url}" target="_new">
      <img id="${this.getId(this.logoTitle)}-logo" class="logo" src="${this.imageUrl}" alt="${this.logoTitle}">
    </a>`;
  }
}