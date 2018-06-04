import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';

import { receivePostsPage } from '@/redux/posts/operations';
import { getPagination } from '@/redux/posts/selectors';
import Component from './component';
import styles from './styles';

const mapStateToProps = store => ({
  pagination: getPagination(store),
});

const mapDispatchToProps = {
  receivePostsPage,
};

export const ComponentWithStyles = withStyles(styles)(Component);

export default connect(mapStateToProps, mapDispatchToProps)(
  ComponentWithStyles,
);
