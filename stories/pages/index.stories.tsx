import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import HomePage from '../../pages/index';

export default {
  title: 'Pages/Index',
  component: HomePage,
} as ComponentMeta<typeof HomePage>;

export const Index: ComponentStory<typeof HomePage> = () => <HomePage />;
