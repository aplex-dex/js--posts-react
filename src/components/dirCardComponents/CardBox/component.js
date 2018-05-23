import React from 'react';
import PropTypes from 'prop-types';
import Card, { CardActions } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import AvatarPart from '@/components/AvatarPart';
import PostContent from '@/components/dirShared/PostContent';

const CardBox = props => {
  const { classes, image, user, title, body, id, selectPost } = props;

  return (
    <Card>
      <AvatarPart
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        userName={user.name}
      />
      <PostContent
        id={id}
        image={image}
        title={title}
        body={body}
        selectPost={selectPost}
      />
      <CardActions className={classes.actions} disableActionSpacing>
        <IconButton aria-label="Add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

CardBox.propTypes = {
  classes: PropTypes.object.isRequired,
  image: PropTypes.string,
  user: PropTypes.object,
  title: PropTypes.string,
  body: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  selectPost: PropTypes.func,
};

CardBox.defaultProps = {
  image: '',
  title: '',
  user: {},
  selectPost: () => {},
};

export default CardBox;
