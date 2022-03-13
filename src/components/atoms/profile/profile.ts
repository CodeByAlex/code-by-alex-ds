import { html, TemplateResult, CSSResultGroup, LitElement, css, unsafeCSS, CSSResult } from 'lit';
import { customElement, property, queryAll, queryAssignedNodes } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import style from './profile.scss';

@customElement('cba-profile')
export class Profile extends LitElement {

  static get styles() {
    return [style];
  }

  @property({ type: String })
  imageDescriptions: String = 'profile image';

  @property({ type: String })
  imageSource: String = '';

  render(): TemplateResult {
    return html`<img alt="${this.imageDescriptions}" class="profile-img" src="${this.imageSource}">`;
  }
}