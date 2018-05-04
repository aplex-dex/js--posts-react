import React, { Component } from 'react';

import BaseHeader from './components/BaseHeader';
import AllPosts from './pages/AllPosts';
import { FAKE_STORE } from './consts/fakeData';

class App extends Component {
  render() {
    const title = 'The Upsilon Times';
    const Page = AllPosts;

    return (
      <div className="App">
        <BaseHeader title={title} />
        <Page store={FAKE_STORE} />
      </div>
    );
  }
}

export default App;
