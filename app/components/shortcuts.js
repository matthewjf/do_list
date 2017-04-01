import React, { Component } from 'react'
import { connect } from 'react-redux'
import key from 'keymaster'
import { codesToShortcut } from '../util/keycodes'

class Shortcuts extends Component {
  handleShortcutChange(e) {
    e.preventDefault()
    e.stopPropagation()
    e.target.value = codesToShortcut(key.getPressedKeyCodes())
  }

  renderShortcut(label, command) {
    return (
      <label>
        {label}
        <input onKeyDown={this.handleShortcutChange}
               type='text'
               defaultValue={this.props.shortcuts[command].shortcut}/>
      </label>
    )
  }

  render() {
    return (
      <div id='shortcuts'>
        <h3>SHORTCUTS</h3>
        {this.renderShortcut('new task', 'newTask')}
      </div>
    )
  }
}

export default connect(state => ({shortcuts: state.shortcuts}))(Shortcuts)
