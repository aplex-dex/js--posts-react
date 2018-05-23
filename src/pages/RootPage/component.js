import React, { Component } from 'react';
import PropTypes from 'prop-types';

import MainHeader from '@/components/MainHeader';
import PostsAll from '@/pages/PostsAll';
import PostSingle from '@/pages/PostSingle';

const pages = {
  PostsAll,
  PostSingle,
};

class RootPage extends Component {
  render() {
    const title = 'The Upsilon Times';
    const Page = this.props.currentPostId ? pages.PostSingle : pages.PostsAll;

    return (
      <div className="App">
        <MainHeader title={title} />
        <Page />
      </div>
    );
  }
}

RootPage.propTypes = {
  currentPostId: PropTypes.string,
};

RootPage.defaultProps = {
  currentPostId: null,
};

export default RootPage;
