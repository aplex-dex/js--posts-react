import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card, { CardActions } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import AvatarPart from '@/components/AvatarPart';
import PostContent from '@/components/PostContent';

class CardBox extends Component {
  render() {
    const { classes, image, userId, title, body, id, selectPost } = this.props;

    return (
      <Card>
        <AvatarPart
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          userId={userId}
        />
        <PostContent
          image={image}
          title={title}
          body={body}
          onClick={() => selectPost(id)}
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
  }
}

CardBox.propTypes = {
  classes: PropTypes.object.isRequired,
  image: PropTypes.string,
  userId: PropTypes.number.isRequired,
  title: PropTypes.string,
  body: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  selectPost: PropTypes.func,
};

CardBox.defaultProps = {
  image: '',
  title: '',
  selectPost: () => {},
};

export default CardBox;
