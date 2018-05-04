import React from 'react';
import { storiesOf } from '@storybook/react';

import { FAKE_STORE } from './../../consts/fakeData';
import CardList from './index';

storiesOf('CardList', module).add('basicly', () => (
  <CardList store={FAKE_STORE} />
));
