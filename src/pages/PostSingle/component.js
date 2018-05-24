import React from 'react';
import PropTypes from 'prop-types';

import SinglePost from './SinglePost';

const PostSingle = ({ post, currentPostId, user, deselectPost }) => (
  <SinglePost
    currentPostId={currentPostId}
    image={post.image}
    title={post.title}
    body={post.body}
    user={user}
    deselectPost={deselectPost}
  />
);

PostSingle.propTypes = {
  currentPostId: PropTypes.number.isRequired,
  post: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  deselectPost: PropTypes.func.isRequired,
};

export default PostSingle;
