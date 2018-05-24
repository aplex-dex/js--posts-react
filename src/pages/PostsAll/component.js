import React from 'react';
import PropTypes from 'prop-types';

import CardList from './CardList';
import Navigation from './Navigation';

const AllPosts = ({ classes: { root } }) => (
  <div className={root}>
    <Navigation content={<CardList />} />
  </div>
);

AllPosts.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default AllPosts;
