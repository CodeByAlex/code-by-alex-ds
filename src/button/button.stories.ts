import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import { Button } from './button';

export default {
  title: "Components / Button-CSF",
  // Need to set the tag to make addon-docs works properly with CustomElementsManifest
  component: 'cba-button'
} as Meta;

const Template: Story<Button> = ({}) =>
  html`<cba-button>Hello World</cba-button>`;

export const Primary: Story<Button> = Template.bind({});