export const getPosts = ({ posts: { items } }) => Object.values(items);
export const getPagination = ({ posts: { pagination } }) => pagination;
export const getCurrentPostId = ({ posts: { currentPostId } }) => currentPostId;

export const getCurrentPost = ({ posts: { items, currentPostId } }) =>
  items[currentPostId];
