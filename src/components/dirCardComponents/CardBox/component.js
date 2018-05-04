import React from 'react';
import PropTypes from 'prop-types';
import Card, { CardMedia, CardContent, CardActions } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ButtonBase from 'material-ui/ButtonBase';

import AvatarPart from '@/components/AvatarPart';

const CardBox = props => {
  const { classes, image, user, title, body, id, selectPost } = props;

  const imagePlace = image && (
    <CardMedia className={classes.media} image={image} title={title}>
      <Typography
        className={classes.imageTitle}
        component="div"
        variant="title"
      >
        {title}
      </Typography>
    </CardMedia>
  );
  const titlePlace = !image && (
    <Typography className={classes.postTitle} component="div">
      {title}
    </Typography>
  );

  return (
    <div>
      <Card className={classes.card}>
        <AvatarPart
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          userName={user.name}
        />
        <ButtonBase
          component="div"
          className={classes.cardContent}
          onClick={() => selectPost(id)}
        >
          {imagePlace}
          <CardContent>
            {titlePlace}
            <Typography component="p">{body}</Typography>
          </CardContent>
        </ButtonBase>
        <CardActions className={classes.actions} disableActionSpacing>
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
