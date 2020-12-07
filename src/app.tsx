import React, { Component } from 'react'
import './app.css'
import { createReduxStore, Provider } from '@redux-model/taro';

const store = createReduxStore();

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // this.props.children 是将要会渲染的页面
  render () {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    );
  }
}

export default App
