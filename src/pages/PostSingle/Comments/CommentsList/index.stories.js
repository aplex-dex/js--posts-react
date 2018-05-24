import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { ComponentWithStyles } from './index';

export const comments = {
  '1': {
    name: 'Ploy love me',
    body: 'น่ารัก',
  },
  '2': {
    name: 'Gopal Bhattacharjee',
    body: 'Lovely',
  },
};

storiesOf('CommentsList', module).add('basicly', () => (
  <ComponentWithStyles
    data={comments}
    loadComments={action('loadComments')}
    createComment={action('createComment')}
  />
));
