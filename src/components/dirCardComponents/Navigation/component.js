import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import Icon from 'material-ui/Icon';

class Navigation extends Component {
  goToPage(url) {
    this.props.receivePostsPage({ url });
  }
  render() {
    const {
      classes: { root, leftButton, buttonLeftPlace, buttonRightPlace },
      pagination: { prev, next },
      content,
    } = this.props;

    const prevButton = prev && (
      <Button
        className={leftButton}
        variant="fab"
        color="primary"
        onClick={() => this.goToPage(prev)}
      >
        <Icon>send</Icon>
      </Button>
    );
    const nextButton = next && (
      <Button variant="fab" color="primary" onClick={() => this.goToPage(next)}>
        <Icon>send</Icon>
      </Button>
    );

    return (
      <div className={root}>
        <div className={buttonLeftPlace}>{prevButton}</div>
        {content}
        <div className={buttonRightPlace}>{nextButton}</div>
      </div>
    );
  }
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
  content: PropTypes.node.isRequired,
  pagination: PropTypes.object.isRequired,
  receivePostsPage: PropTypes.func.isRequired,
};

export default Navigation;
