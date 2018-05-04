import React from 'react';
import PropTypes from 'prop-types';
import Card, { CardMedia, CardContent, CardActions } from 'material-ui/Card';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ButtonBase from 'material-ui/ButtonBase';

import CommentsList from '@/components/dirPostComponents/Comments/CommentsList';
import AvatarPart from '@/components/AvatarPart';
import { comments } from '@/components/dirPostComponents/Comments/CommentsList/index.stories';

const SinglePost = props => {
  const { classes, image, user, title, body, selectPost } = props;

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
        <ButtonBase
          component="div"
          className={classes.cardContent}
          onClick={() => selectPost(null)}
        >
          {imagePlace}
          <AvatarPart userName={user.name} />
          <CardContent>
            {titlePlace}
            <Typography component="p">{body}</Typography>
          </CardContent>
        </ButtonBase>
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
  user: PropTypes.object.isRequired,
  title: PropTypes.string,
  body: PropTypes.string.isRequired,
  selectPost: PropTypes.func.isRequired,
};

SinglePost.defaultProps = {
  image: '',
  title: '',
};

export default SinglePost;
