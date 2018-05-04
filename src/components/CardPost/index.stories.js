import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { FAKE_POSTS } from './../../consts/fakeData';
import CardPost from './../CardPost';

storiesOf('CardPost', module)
  .add('with image little text', () => (
    <CardPost
      image="https://picsum.photos/1366/768/?random"
      userName={FAKE_POSTS.little.userName}
      title={FAKE_POSTS.little.title}
      body={FAKE_POSTS.little.body}
      id="1"
      click={action('clicked')}
    />
  ))
  .add('without image little text', () => (
    <CardPost
      userName={FAKE_POSTS.little.userName}
      title={FAKE_POSTS.little.title}
      body={FAKE_POSTS.little.body}
      id="1"
      click={action('clicked')}
    />
  ))
  .add('with image big text', () => (
    <CardPost
      image="https://picsum.photos/1366/768/?random"
      userName={FAKE_POSTS.big.userName}
      title={FAKE_POSTS.big.title}
      body={FAKE_POSTS.big.body}
      id="1"
      click={action('clicked')}
    />
  ))
  .add('without image big text', () => (
    <CardPost
      userName={FAKE_POSTS.big.userName}
      title={FAKE_POSTS.big.title}
      body={FAKE_POSTS.big.body}
      id="1"
      click={action('clicked')}
    />
  ));
