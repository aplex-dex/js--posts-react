import { connect } from 'react-redux';

import { getCurrentPostId } from '@/redux/posts/selectors';
import Component from './component';

const mapStateToProps = state => ({
  currentPostId: getCurrentPostId(state),
});

export default connect(mapStateToProps)(Component);
