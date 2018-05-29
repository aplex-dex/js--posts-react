import React, { Component } from 'react';
import PropTypes from 'prop-types';

import NavButton from './NavButton';

class Navigation extends Component {
  goToPage(url) {
    this.props.receivePostsPage({ url });
  }

  render() {
    const {
      classes: { root, buttonLeftPlace, buttonRightPlace },
      pagination: { prev, next },
      content,
    } = this.props;

    return (
      <div className={root}>
        <div className={buttonLeftPlace}>
          <NavButton
            isVisable={Boolean(prev)}
            isLeftButton
            onClick={() => this.goToPage(prev)}
          />
        </div>
        {content}
        <div className={buttonRightPlace}>
          <NavButton
            isVisable={Boolean(next)}
            onClick={() => this.goToPage(next)}
          />
        </div>
      </div>
    );
  }
}

Navigation.propTypes = {
  classes: PropTypes.object.isRequired,
  content: PropTypes.node.isRequired,
  pagination: PropTypes.object,
  receivePostsPage: PropTypes.func.isRequired,
};

Navigation.defaultProps = {
  pagination: { prev: '', next: '' },
};

export default Navigation;
