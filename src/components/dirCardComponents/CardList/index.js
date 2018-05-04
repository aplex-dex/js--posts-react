import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';

import Component from './component';
import styles from './styles';
import { receivePosts, setcurrentPostId } from '@/redux/posts/actions';
import { reciveUsers } from '@/redux/users/actions';

const mapStateToProps = ({ posts, users }) => ({
  posts,
  users,
});

const mapDispatchToProps = dispatch => ({
  loadPosts: options => dispatch(receivePosts(options)),
  loadUsers: () => dispatch(reciveUsers()),
  selectPost: id => dispatch(setcurrentPostId(id)),
});

export const ComponentWithStyles = withStyles(styles)(Component);

export default connect(mapStateToProps, mapDispatchToProps)(
  ComponentWithStyles,
);
