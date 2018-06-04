import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import { sendReceiveComments } from '@/redux/comments/operations';
import { commentAdd } from '@/redux/comments/actions';
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
      dispatch(commentAdd.requested({ ...params, postId: currentPostId })),
  };
};

export default connect(mapStateToProps, null, mergeProps)(ComponentWithStyles);
