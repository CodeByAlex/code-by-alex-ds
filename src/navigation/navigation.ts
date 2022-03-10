import { html, TemplateResult, CSSResultGroup, LitElement, css, unsafeCSS, CSSResult } from 'lit';
import { customElement, property, queryAll, queryAssignedNodes } from 'lit/decorators.js';
import style from './navigation.scss';
/**
 * The Outline Button component
 * @slot - The default, and only slot for this element.
 */
@customElement('cba-navigation')
export class Navigation extends LitElement {

  static get styles() {
    return [style];
  }

  /**
   * The button style variant to use.
   */
  @property({ type: String })
  brandName = '';

  /**
   * The button style variant to use.
   */
  @property({ type: Array })
  links = [];

  render(): TemplateResult {
    console.log(this.links)
    this.links = [{
      title: 'ABOUT',
      url: 'https://www.google.com'  
    },
    {
      title: 'ABILITIES',
      url: 'https://www.google.com'  
    },
    {
      title: 'EXPERIENCE',
      url: 'https://www.google.com'  
    },
    {
      title: 'SPEAKING',
      url: 'https://www.google.com'  
    },
    {
      title: 'CONTACT',
      url: 'https://www.google.com'  
    }]
    console.log(this.links)
    return html`
    <nav class="navigation-container">
      <div>
        <a id="home-link" class="title-font" href="#home">${this.brandName}</a>
      </div>
      <div class="link-container">
        ${this.links.map((link) => html`<a class="link" href="${link.url}">${link.title}</a>`)}
      </div>
    </nav>
    `;
  }
}
// <nav class="">
// <div class="container-fluid">
//   <div class="navbar-header">
//     <a #link id="home-link" class="navbar-brand title-font" href="#home" (click)="scrollToSection('home', $event)">Code By Alex</a>
//     <button type="button" class="navbar-toggle collapsed" (click)="toggleState()" aria-label="Menu">
//       <span class="icon-bar" aria-hidden="true"></span>
//       <span class="icon-bar" aria-hidden="true"></span>
//       <span class="icon-bar" aria-hidden="true"></span>
//     </button>
//   </div>

//   <!-- Collect the nav links, forms, and other content for toggling -->
//   <div class="navbar-right" >
//     <div class="collapse navbar-collapse" [ngClass]="{'in': isIn}">
//       <ul class="nav navbar-nav">
//         <li><a #link id="about-link" href="#about" class="link" [ngClass]="isScrollDown?'link-down':'link-up'" (click)="scrollToSection('about', $event)" (click)="closeNav()">ABOUT</a></li>
//         <li><a #link id="abilities-link" href="#abilities" [ngClass]="isScrollDown?'link-down':'link-up'" (click)="scrollToSection('abilities', $event)" (click)="closeNav()">ABILITIES</a></li>
//         <li><a #link id="experience-link" href="#experience" [ngClass]="isScrollDown?'link-down':'link-up'" (click)="scrollToSection('experience', $event)" (click)="closeNav()">EXPERIENCE</a></li>
//         <li><a #link id="speaking-link" href="#speaking" [ngClass]="isScrollDown?'link-down':'link-up'" (click)="scrollToSection('speaking', $event)" (click)="closeNav()">SPEAKING</a></li>
//         <li><a #link id="contact-link" href="#contact" [ngClass]="isScrollDown?'link-down':'link-up'" (click)="scrollToSection('contact', $event)" (click)="closeNav()">CONTACT</a></li>
//       </ul>
//     </div>
//   </div>
// </div>
// </nav>