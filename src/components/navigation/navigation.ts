import { html, TemplateResult, CSSResultGroup, LitElement, css, unsafeCSS, CSSResult } from 'lit';
import { customElement, property, queryAll, queryAssignedNodes } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import style from './navigation.scss';
/**
 * The Outline Button component
 * @slot - The default, and only slot for this element.
 */
@customElement('cba-navigation')
export class Navigation extends LitElement {

  isNavOpen = false;

  static get styles() {
    return [style];
  }

  @property({ type: String })
  brandName = '';

  @property({ type: Array })
  links = [];

  getId = (linkTitle: string) => {
    const transformedLinkTitle = linkTitle && linkTitle ? linkTitle.toLowerCase().replace(' ', '-') : '';
    return `${transformedLinkTitle}-link`
  }

  toggleState = () => {
    this.isNavOpen = !this.isNavOpen;
    this.requestUpdate()
  }

  render(): TemplateResult {
    return html`
    <nav class="navigation-container">
      <div class="brand-section">
        <a id="home-link" class="title-font" href="#home">${this.brandName}</a>
        <button type="button" class="nav-toggle" @click=${(e:any) => this.toggleState()} aria-label="Menu">
          <span class="icon-bar" aria-hidden="true"></span>
          <span class="icon-bar" aria-hidden="true"></span>
          <span class="icon-bar" aria-hidden="true"></span>
        </button>
      </div>
      <div class=${classMap({
        'link-container': true,
        'hide-links': !this.isNavOpen
        })}>
        ${this.links.map((link: any) => html`<a class="link" id="${this.getId(link.title)}" href="${link.url}">${link.title}</a>`)}
      </div>
    </nav>
    `;
  }
}