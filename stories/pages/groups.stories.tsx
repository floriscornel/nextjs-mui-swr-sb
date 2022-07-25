import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import GroupsPage from '../../pages/groups';

export default {
  title: 'Pages/GroupsPage',
  component: GroupsPage,
} as ComponentMeta<typeof GroupsPage>;

export const Page: ComponentStory<typeof GroupsPage> = () => <GroupsPage />;
