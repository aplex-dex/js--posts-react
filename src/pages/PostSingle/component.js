import React from 'react';
import PropTypes from 'prop-types';

import SinglePost from '@/components/dirPostComponents/SinglePost';

const PostPage = ({ post, currentPostId, user, selectPost }) => (
  <SinglePost
    currentPostId={currentPostId}
    image={post.image}
    title={post.title}
    body={post.body}
    user={user}
    selectPost={selectPost}
  />
);

PostPage.propTypes = {
  currentPostId: PropTypes.string.isRequired,
  post: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  selectPost: PropTypes.func.isRequired,
};

export default PostPage;
