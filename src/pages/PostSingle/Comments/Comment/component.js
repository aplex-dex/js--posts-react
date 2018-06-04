import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

const Comment = ({ classes, comment }) => {
  const { name, body } = comment;

  return (
    <Typography className={classes.root} component="div">
      <b>{name}</b>: <span>{body}</span>
    </Typography>
  );
};

Comment.propTypes = {
  classes: PropTypes.object.isRequired,
  comment: PropTypes.object.isRequired,
};

export default Comment;
