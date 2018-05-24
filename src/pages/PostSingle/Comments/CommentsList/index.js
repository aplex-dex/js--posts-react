import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';

import {
  sendReceiveComments,
  sendCreateComment,
} from '@/redux/comments/operations';
import { getComments } from '@/redux/comments/selectors';
import { getCurrentPostId } from '@/redux/posts/selectors';
import Component from './component';
import styles from './styles';

export const ComponentWithStyles = withStyles(styles)(Component);

const mapStateToProps = state => ({
  currentPostId: getCurrentPostId(state),
  data: getComments(state),
});

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { currentPostId, data } = stateProps;
  const { dispatch } = dispatchProps;

  return {
    ...ownProps,
    data,
    loadComments: () => dispatch(sendReceiveComments(currentPostId)),
    createComment: params =>
      dispatch(sendCreateComment({ ...params, postId: currentPostId })),
  };
};

export default connect(mapStateToProps, null, mergeProps)(ComponentWithStyles);
