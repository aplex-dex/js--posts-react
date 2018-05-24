import React from 'react';
import { storiesOf } from '@storybook/react';

import { FAKE_STORE } from '@/utils/fakeData';
import { ComponentWithStyles } from './index';

storiesOf('CardList', module).add('basicly', () => (
  <ComponentWithStyles
    classes={{}}
    posts={FAKE_STORE.posts}
    users={FAKE_STORE.users}
    loadPosts={() => {}}
    loadUsers={() => {}}
    selectPost={() => {}}
  />
));
