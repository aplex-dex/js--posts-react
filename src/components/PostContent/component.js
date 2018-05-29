import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { CardMedia, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import ButtonBase from 'material-ui/ButtonBase';
import classNames from 'classnames';

class PostContent extends PureComponent {
  render() {
    const { classes, image, title, body, onClick, isSmall } = this.props;

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
        onClick={onClick}
      >
        {imagePlace}
        <CardContent>
          {titlePlace}
          <Typography component="p">{body}</Typography>
        </CardContent>
      </ButtonBase>
    );
  }
}

PostContent.propTypes = {
  classes: PropTypes.object.isRequired,
  image: PropTypes.string,
  title: PropTypes.string,
  body: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  isSmall: PropTypes.bool,
};

PostContent.defaultProps = {
  image: '',
  title: '',
  user: {},
  isSmall: false,
  onClick: () => {},
};

export default PostContent;
