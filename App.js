import React, { Component } from 'react';
import Appcontainer from './navigation/navigate';
import { Provider } from 'react-redux';
import store from './store/store'


class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Appcontainer />
      </Provider>
    )
  }
}
export default App