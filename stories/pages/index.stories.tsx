import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import HomePage from '../../pages/index';

export default {
  title: 'HomePage',
  component: HomePage,
} as ComponentMeta<typeof HomePage>;

const Template: ComponentStory<typeof HomePage> = (args) => (
  <HomePage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
