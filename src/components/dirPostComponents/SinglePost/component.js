import React from 'react';
import PropTypes from 'prop-types';
import Card, { CardActions } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

import CommentsList from '@/components/dirPostComponents/Comments/CommentsList';
import { comments } from '@/components/dirPostComponents/Comments/CommentsList/index.stories';
import PostContent from '@/components/dirShared/PostContent';

const SinglePost = props => {
  const { classes, image, title, body, selectPost } = props;

  return (
    <div>
      <Card>
        <PostContent
          image={image}
          title={title}
          body={body}
          selectPost={selectPost}
          isSmall
        />
        <CardActions className={classes.actions} disableActionSpacing>
          <CommentsList data={comments} />
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

SinglePost.propTypes = {
  classes: PropTypes.object.isRequired,
  image: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string.isRequired,
  selectPost: PropTypes.func.isRequired,
};

SinglePost.defaultProps = {
  image: '',
  title: '',
};

export default SinglePost;
