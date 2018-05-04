import { connect } from 'react-redux';

import Component from './component';

const mapStateToProps = ({ currentPostId }) => ({
  currentPostId,
});

export default connect(mapStateToProps)(Component);
