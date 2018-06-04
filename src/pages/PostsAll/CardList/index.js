import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import Component from './component';
import styles from './styles';
import { receivePosts, setCurrentPostId } from '@/redux/posts/operations';
import { reciveUsers } from '@/redux/users/operations';
import { getPosts } from '@/redux/posts/selectors';
import { getUsers } from '@/redux/users/selectors';

const mapStateToProps = state => ({
  posts: getPosts(state),
  users: getUsers(state),
});

const mapDispatchToProps = {
  loadPosts: receivePosts,
  loadUsers: reciveUsers,
  selectPost: setCurrentPostId,
};

export const ComponentWithStyles = withStyles(styles)(Component);

export default connect(mapStateToProps, mapDispatchToProps)(
  ComponentWithStyles,
);
