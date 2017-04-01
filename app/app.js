import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'
import middleware from './middleware/middleware'
import key from 'keymaster'

import rootReducer from './reducers/root_reducer'

import Title from './components/title'
import Settings from './components/settings'
import List from './components/list'
import NewTask from './components/new_task'

class App extends Component {
  componentDidMount() {
    key.filter = () => true
    key.setScope('list')

    var {shortcuts} = store.getState()
    Object.keys(shortcuts).forEach((cmd) => {
      let sc = shortcuts[cmd]
      key(sc.shortcut, sc.scope, () => {
        window.dispatchEvent(new Event(cmd))
        return false
      })
    })
  }

  render() {
    return (
      <div id='app'>
        <Title />
        <Settings />
        <List />
        <NewTask />
      </div>
    )
  }
}

export const store = createStore(rootReducer, JSON.parse(localStorage.getItem('dolist')) || {}, middleware)

render(<Provider store={store}><App/></Provider>, document.getElementById('root'))
