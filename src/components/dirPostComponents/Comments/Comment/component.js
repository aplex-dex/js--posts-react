import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';

const Comment = ({ classes, userName, text }) => (
  <Typography className={classes.root} component="div">
    <b>{userName}</b>: <span>{text}</span>
  </Typography>
);

Comment.propTypes = {
  classes: PropTypes.object.isRequired,
  userName: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Comment;
