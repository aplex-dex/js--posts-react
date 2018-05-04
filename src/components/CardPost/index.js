import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, {
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
} from 'material-ui/Card';
import Avatar from 'material-ui/Avatar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ButtonBase from 'material-ui/ButtonBase';

import styles from './styles';

const RecipeReviewCard = props => {
  const { classes, image, userName, title, body, id, click } = props;

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
        <CardHeader
          avatar={
            <Avatar aria-label="Recipe" className={classes.avatar}>
              R
            </Avatar>
          }
          action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }
          title={userName}
          subheader="September 14, 2016"
        />
        <ButtonBase
          component="div"
          className={classes.cardContent}
          onClick={() => click(id)}
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

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired,
  image: PropTypes.string,
  userName: PropTypes.string.isRequired,
  title: PropTypes.string,
  body: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  click: PropTypes.func,
};

RecipeReviewCard.defaultProps = {
  image: 'https://picsum.photos/1366/768/?random',
  title: '',
  click: () => {},
};

export default withStyles(styles)(RecipeReviewCard);
