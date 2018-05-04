import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import CardList from './../../components/CardList';

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.default,
    display: 'flex',
    justifyContent: 'center',
  },
});

const AllPosts = ({ classes: { root }, store }) => (
  <div className={root}>
    <CardList store={store} />
  </div>
);

AllPosts.propTypes = {
  classes: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};

export default withStyles(styles)(AllPosts);
