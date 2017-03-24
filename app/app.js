'use strict'
import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import middleware from './middleware/middleware'

import rootReducer from './reducers/root_reducer'

import Title from './components/title'
import List from './components/list'
import Add from './components/add'

class App extends Component {
  render() {
    return (
      <div id='app'>
        <Title />
        <List />
        <Add />
      </div>
    )
  }
}

export const store = createStore(rootReducer, JSON.parse(localStorage.getItem('getdone')) || {}, middleware)

render(<Provider store={store}><App/></Provider>, document.getElementById('root'))
