import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import GroupsPage from '../../pages/groups';

export default {
  title: 'Pages/Groups',
  component: GroupsPage,
} as ComponentMeta<typeof GroupsPage>;

export const Groups: ComponentStory<typeof GroupsPage> = () => <GroupsPage />;
