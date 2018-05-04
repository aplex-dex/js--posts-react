import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import { setcurrentPostId } from '@/redux/posts/actions';

import Component from './component';
import styles from './styles';

export const ComponentWithStyles = withStyles(styles)(Component);

const mapStateToProps = ({ posts, users, currentPostId }) => ({
  currentPostId,
  post: posts[currentPostId],
  user: users[posts[currentPostId].userId] || {},
});

const mapDispatchToProps = dispatch => ({
  selectPost: postId => dispatch(setcurrentPostId(postId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(
  ComponentWithStyles,
);
