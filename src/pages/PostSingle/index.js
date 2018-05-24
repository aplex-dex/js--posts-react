import { connect } from 'react-redux';

import { getCurrentPost, getCurrentPostId } from '@/redux/posts/selectors';
import { getCurrentUser } from '@/redux/users/selectors';
import { resetCurrentPostId } from '@/redux/posts/operations';
import Component from './component';

const mapStateToProps = state => ({
  currentPostId: getCurrentPostId(state),
  post: getCurrentPost(state),
  user: getCurrentUser(state) || {},
});

const mapDispatchToProps = {
  deselectPost: resetCurrentPostId,
};

export default connect(mapStateToProps, mapDispatchToProps)(Component);
