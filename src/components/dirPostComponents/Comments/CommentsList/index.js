import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { reciveComments, createComment } from '@/redux/comments/actions';

import Component from './component';
import styles from './styles';

export const ComponentWithStyles = withStyles(styles)(Component);

const mapStateToProps = ({ comments, currentPostId }) => ({
  currentPostId,
  data: comments,
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { currentPostId, data } = stateProps;
  const { dispatch } = dispatchProps;

  return {
    ...ownProps,
    data,
    loadComments: () => dispatch(reciveComments(currentPostId)),
    createComment: params =>
      dispatch(createComment({ ...params, postId: currentPostId })),
  };
};

export default connect(mapStateToProps, null, mergeProps)(ComponentWithStyles);
