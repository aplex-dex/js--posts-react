import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Comment from '../Comment';
import AddComment from '../AddComment';

class CommentsList extends Component {
  componentDidMount() {
    this.props.loadComments();
  }

  render() {
    const { classes, data, createComment } = this.props;

    const commentsNode = Object.keys(data).map(id => (
      <Comment key={id} comment={data[id]} />
    ));

    return (
      <div className={classes.root}>
        {commentsNode}
        <AddComment onSubmit={createComment} />
      </div>
    );
  }
}

CommentsList.propTypes = {
  classes: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
  createComment: PropTypes.func.isRequired,
  loadComments: PropTypes.func.isRequired,
};

export default CommentsList;
