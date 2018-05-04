import { connect } from 'react-redux';
import { withStyles } from 'material-ui/styles';

import Component from './component';
import { receivePostsPage } from '@/redux/posts/actions';
import styles from './styles';

const mapStateToProps = ({ pagination }) => ({
  pagination,
});

const mapDispatchToProps = dispatch => ({
  receivePostsPage: options => dispatch(receivePostsPage(options)),
});

export const ComponentWithStyles = withStyles(styles)(Component);

export default connect(mapStateToProps, mapDispatchToProps)(
  ComponentWithStyles,
);
