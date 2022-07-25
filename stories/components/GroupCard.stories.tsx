import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { GroupCard as GroupCardComponent } from '../../components/GroupCard';
import { getGetGroupMock } from '../../generated/groups/groups.msw';

export default {
  title: 'Components/GroupCard',
  component: GroupCardComponent,
} as ComponentMeta<typeof GroupCardComponent>;

export const GroupCard: ComponentStory<typeof GroupCardComponent> = () => (
  <GroupCardComponent group={getGetGroupMock()} />
);
