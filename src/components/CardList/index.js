import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import CardPost from './../../components/CardPost';
import styles from './styles';

function CardList({ classes, store: { posts } }) {
  const Cards = posts.map(({ id, userName, title, body }) => (
    <div className={classes.cardWrapper} key={id}>
      <CardPost id={id} userName={userName} title={title} body={body} />
    </div>
  ));

  return <div className={classes.root}>{Cards}</div>;
}

CardList.propTypes = {
  classes: PropTypes.object.isRequired,
  store: PropTypes.object.isRequired,
};

export default withStyles(styles)(CardList);
