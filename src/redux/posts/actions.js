import { objectsArrayToHash, parseLinkHeader, addFakeData } from '@/utils';
import { getPosts, getPostsPage } from '@/redux/posts/requests';

export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const CHANGE_POSTS_PAGE = 'CHANGE_POSTS_PAGE';
export const CHANGE_CURRENT_POST = 'CHANGE_CURRENT_POST';

const providePosts = ({ data, headers: { link } }) => ({
  type: RECEIVE_POSTS,
  posts: addFakeData(objectsArrayToHash(data)),
  pagination: parseLinkHeader(link),
});

const providePostsPage = ({ data, headers: { link } }) => ({
  type: CHANGE_POSTS_PAGE,
  posts: addFakeData(objectsArrayToHash(data)),
  pagination: parseLinkHeader(link),
});

const changecurrentPostId = postId => ({
  type: CHANGE_CURRENT_POST,
  currentPostId: postId,
});

export const receivePosts = ({ url, params } = {}) => dispatch =>
  getPosts(url, params).then(response => dispatch(providePosts(response)));

export const receivePostsPage = ({ url } = {}) => dispatch =>
  getPostsPage(url).then(response => dispatch(providePostsPage(response)));

export const setcurrentPostId = id => dispatch =>
  dispatch(changecurrentPostId(id));
