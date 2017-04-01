import React, { Component } from 'react'
import { connect } from 'react-redux'
import key from 'keymaster'
import { codesToShortcut } from '../util/keycodes'

class Shortcuts extends Component {
  constructor(props) {
    super(props)
    this.renderShortcuts = this.renderShortcuts.bind(this)
  }

  handleShortcutChange(e) {
    e.preventDefault()
    e.stopPropagation()
    e.target.value = codesToShortcut(key.getPressedKeyCodes())
  }

  toReadable(camel) {
    return camel.replace(/([A-Z])/g, ' $1').toLowerCase()
  }

  renderShortcuts() {
    let {shortcuts} = this.props
    return Object.keys(shortcuts).map((name, idx) => {
      return this.renderShortcut(this.toReadable(name), name, idx)
    })
  }

  renderShortcut(label, command, idx) {
    return (
      <label key={idx}>
        {label}
        <input onKeyDown={this.handleShortcutChange}
               type='text'
               defaultValue={this.props.shortcuts[command].shortcut}
               disabled={true} />
      </label>
    )
  }

  render() {
    return (
      <div id='shortcuts'>
        <h3>SHORTCUTS</h3>
        {this.renderShortcuts()}
      </div>
    )
  }
}

export default connect(state => ({shortcuts: state.shortcuts}))(Shortcuts)
