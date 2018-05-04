import React from 'react';
import PropTypes from 'prop-types';

import CardList from '@/components/dirCardComponents/CardList';
import Navigation from '@/components/dirCardComponents/Navigation';

const AllPosts = ({ classes: { root } }) => (
  <div className={root}>
    <Navigation content={<CardList />} />
  </div>
);

AllPosts.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default AllPosts;
