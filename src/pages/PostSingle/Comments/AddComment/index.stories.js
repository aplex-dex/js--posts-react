import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import AddComment from './index';

storiesOf('AddComment', module).add('basicly', () => (
  <AddComment onSubmit={action('onSubmit')} />
));
