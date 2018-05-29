import { createAction } from 'redux-actions';

import { RECEIVE_POSTS, CHANGE_POSTS_PAGE, CHANGE_CURRENT_POST } from './types';

export const providePosts = createAction(RECEIVE_POSTS);
export const providePostsPage = createAction(CHANGE_POSTS_PAGE);
export const changeCurrentPostId = createAction(CHANGE_CURRENT_POST);
