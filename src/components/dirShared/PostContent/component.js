import React from 'react';
import PropTypes from 'prop-types';
import { CardMedia, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import ButtonBase from 'material-ui/ButtonBase';
import classNames from 'classnames';

const PostContent = props => {
  const { classes, image, title, body, id, selectPost, isSmall } = props;

  const cardStyles = classNames({
    [classes.media]: true,
    [classes.media_small]: isSmall,
  });

  const imagePlace = image && (
    <CardMedia className={cardStyles} image={image} title={title}>
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
  );
};

PostContent.propTypes = {
  classes: PropTypes.object.isRequired,
  image: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  selectPost: PropTypes.func,
  isSmall: PropTypes.bool,
};

PostContent.defaultProps = {
  image: '',
  title: '',
  user: {},
  isSmall: false,
  selectPost: () => {},
};

export default PostContent;
