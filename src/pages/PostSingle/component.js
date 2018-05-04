import React from 'react';
import PropTypes from 'prop-types';

import SinglePost from '@/components/dirPostComponents/SinglePost';

const PostPage = ({
  classes: { root },
  post: { image, title, body },
  currentPostId,
  user,
  selectPost,
}) => (
  <div className={root}>
    <SinglePost
      currentPostId={currentPostId}
      image={image}
      title={title}
      body={body}
      user={user}
      selectPost={selectPost}
    />
  </div>
);

PostPage.propTypes = {
  classes: PropTypes.object.isRequired,
  currentPostId: PropTypes.string.isRequired,
  post: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  selectPost: PropTypes.func.isRequired,
};

export default PostPage;
