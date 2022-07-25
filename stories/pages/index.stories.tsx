import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import HomePage from '../../pages/index';

export default {
  title: 'Pages/HomePage',
  component: HomePage,
} as ComponentMeta<typeof HomePage>;

export const Page: ComponentStory<typeof HomePage> = () => <HomePage />;
