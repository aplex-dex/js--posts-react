import { getPosts, getPostsPage } from '@/api';
import { providePosts, providePostsPage, changeCurrentPostId } from './actions';

export const receivePosts = ({ url, params } = {}) => dispatch =>
  getPosts(url, params).then(({ data, headers: { link } }) =>
    dispatch(providePosts({ data, link })),
  );

export const receivePostsPage = ({ url } = {}) => dispatch =>
  getPostsPage(url).then(({ data, headers: { link } }) =>
    dispatch(providePostsPage({ data, link })),
  );

export const setCurrentPostId = currentPostId => dispatch =>
  dispatch(changeCurrentPostId({ currentPostId }));

export const resetCurrentPostId = () =>
  changeCurrentPostId({ currentPostId: null });
