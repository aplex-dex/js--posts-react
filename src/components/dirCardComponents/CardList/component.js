import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CardBox from '@/components/dirCardComponents/CardBox';

class CardList extends Component {
  componentDidMount() {
    this.props.loadPosts();
    this.props.loadUsers();
  }

  render() {
    const { classes, posts, users, selectPost } = this.props;

    const Cards = Object.keys(posts).map(id => {
      const { userId, title, body, image } = posts[id];

      return (
        <div className={classes.cardWrapper} key={id}>
          <CardBox
            id={id}
            user={users[userId]}
            title={title}
            body={body}
            image={image}
            selectPost={() => selectPost(id)}
          />
        </div>
      );
    });

    return <div className={classes.root}>{Cards}</div>;
  }
}

CardList.propTypes = {
  classes: PropTypes.object.isRequired,
  posts: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
  loadPosts: PropTypes.func.isRequired,
  loadUsers: PropTypes.func.isRequired,
  selectPost: PropTypes.func.isRequired,
};

export default CardList;
