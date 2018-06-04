import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

import PostContent from '@/components/PostContent';
import CommentsList from '../Comments/CommentsList';

const SinglePost = props => {
  const { classes, image, title, body, deselectPost } = props;

  return (
    <div>
      <Card>
        <PostContent
          image={image}
          title={title}
          body={body}
          onClick={deselectPost}
          isSmall
        />
        <CardActions className={classes.actions} disableActionSpacing>
          <CommentsList />
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
  deselectPost: PropTypes.func.isRequired,
};

SinglePost.defaultProps = {
  image: '',
  title: '',
};

export default SinglePost;
