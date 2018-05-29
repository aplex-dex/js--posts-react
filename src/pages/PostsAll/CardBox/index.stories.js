import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { FAKE_POSTS, image } from '@/utils/fakeData';
import CardBox from './index';

storiesOf('CardBox', module)
  .add('with image little text', () => (
    <CardBox
      image={image}
      user={FAKE_POSTS.little.user}
      title={FAKE_POSTS.little.title}
      body={FAKE_POSTS.little.body}
      id="1"
      selectPost={action('clicked')}
    />
  ))
  .add('without image little text', () => (
    <CardBox
      user={FAKE_POSTS.little.user}
      title={FAKE_POSTS.little.title}
      body={FAKE_POSTS.little.body}
      id="1"
      selectPost={action('clicked')}
    />
  ))
  .add('with image big text', () => (
    <CardBox
      image={image}
      user={FAKE_POSTS.big.user}
      title={FAKE_POSTS.big.title}
      body={FAKE_POSTS.big.body}
      id="1"
      selectPost={action('clicked')}
    />
  ))
  .add('without image big text', () => (
    <CardBox
      user={FAKE_POSTS.big.user}
      title={FAKE_POSTS.big.title}
      body={FAKE_POSTS.big.body}
      id="1"
      selectPost={action('clicked')}
    />
  ));
