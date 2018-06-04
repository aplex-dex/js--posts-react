import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

import { getUserById } from '@/redux/users/selectors';
import Component from './component';
import styles from './styles';

export const ComponentWithStyles = withStyles(styles)(Component);

const mapStateToProps = (state, props) => ({
  user: getUserById(state, props) || {},
});

export default connect(mapStateToProps)(ComponentWithStyles);
