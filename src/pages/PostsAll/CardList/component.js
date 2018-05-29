import React, { Component } from 'react';
import PropTypes from 'prop-types';

import CardBox from '../CardBox';

class CardList extends Component {
  componentDidMount() {
    this.props.loadPosts();
    this.props.loadUsers();
  }

  selectPost = id => this.props.selectPost(id);

  render() {
    const { classes, posts } = this.props;

    const Cards = posts.map(post => {
      const { id, userId, title, body, image } = post;

      return (
        <div className={classes.cardWrapper} key={id}>
          <CardBox
            id={id}
            userId={userId}
            title={title}
            body={body}
            image={image}
            selectPost={this.selectPost}
          />
        </div>
      );
    });

    return <div className={classes.root}>{Cards}</div>;
  }
}

CardList.propTypes = {
  classes: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
  loadPosts: PropTypes.func.isRequired,
  loadUsers: PropTypes.func.isRequired,
  selectPost: PropTypes.func.isRequired,
};

export default CardList;
