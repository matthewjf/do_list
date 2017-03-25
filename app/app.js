'use strict'
import React, { Component } from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import middleware from './middleware/middleware'

import rootReducer from './reducers/root_reducer'

import Title from './components/title'
import Settings from './components/settings'
import List from './components/list'
import Add from './components/add'

class App extends Component {
  constructor(props) {
    super(props)
    this.openSettings = this.openSettings.bind(this)
    this.closeSettings = this.closeSettings.bind(this)

    this.state = {showSettings: false}
  }

  openSettings() {
    this.setState({showSettings: true})
  }

  closeSettings() {
    this.setState({showSettings: false})
  }

  render() {
    return (
      <div id='app'>
        <Title openSettings={this.openSettings} />
        <Settings show={this.state.showSettings} close={this.closeSettings}/>
        <List />
        <Add />
      </div>
    )
  }
}

export const store = createStore(rootReducer, JSON.parse(localStorage.getItem('dolist')) || {}, middleware)

render(<Provider store={store}><App/></Provider>, document.getElementById('root'))
