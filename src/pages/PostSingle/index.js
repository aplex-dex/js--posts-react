import { connect } from 'react-redux';

import { setcurrentPostId } from '@/redux/posts/actions';
import Component from './component';

const mapStateToProps = ({ posts, users, currentPostId }) => ({
  currentPostId,
  post: posts[currentPostId],
  user: users[posts[currentPostId].userId] || {},
});

const mapDispatchToProps = dispatch => ({
  selectPost: postId => dispatch(setcurrentPostId(postId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
