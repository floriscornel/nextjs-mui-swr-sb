import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import GroupsPage from '../../pages/groups';

export default {
  title: 'GroupsPage',
  component: GroupsPage,
} as ComponentMeta<typeof GroupsPage>;

const Template: ComponentStory<typeof GroupsPage> = (args) => (
  <GroupsPage {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
