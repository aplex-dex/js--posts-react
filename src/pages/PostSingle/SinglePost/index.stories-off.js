import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { FAKE_POSTS } from '@/utils/fakeData';
import SinglePost from './index';

storiesOf('SinglePost', module)
  .add('with image little text', () => (
    <SinglePost
      image="https://picsum.photos/1366/768/?random"
      user={FAKE_POSTS.little.user}
      title={FAKE_POSTS.little.title}
      body={FAKE_POSTS.little.body}
      id="1"
      click={action('clicked')}
    />
  ))
  .add('without image little text', () => (
    <SinglePost
      user={FAKE_POSTS.little.user}
      title={FAKE_POSTS.little.title}
      body={FAKE_POSTS.little.body}
      id="1"
      click={action('clicked')}
    />
  ))
  .add('with image big text', () => (
    <SinglePost
      image="https://picsum.photos/1366/768/?random"
      user={FAKE_POSTS.big.user}
      title={FAKE_POSTS.big.title}
      body={FAKE_POSTS.big.body}
      id="1"
      click={action('clicked')}
    />
  ))
  .add('without image big text', () => (
    <SinglePost
      user={FAKE_POSTS.big.user}
      title={FAKE_POSTS.big.title}
      body={FAKE_POSTS.big.body}
      id="1"
      click={action('clicked')}
    />
  ));
