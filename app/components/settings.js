import React, { Component } from 'react'
import { connect } from 'react-redux'
import { showSettings } from '../actions/settings_actions'

class Settings extends Component {
  constructor(props) {
    super(props)
    this.getClass = this.getClass.bind(this)
    this.closeSettings = this.closeSettings.bind(this)
  }

  getClass() {
    return this.props.show ? '' : 'hidden'
  }

  closeSettings(e) {
    e.preventDefault()
    if (e.currentTarget === e.target) this.props.close()
  }

  render() {
    return (
      <div id='settings-wrapper' onClick={this.closeSettings} className={this.getClass()}>
        <div id='settings' className={this.getClass()}>
          <button onClick={this.closeSettings}>close</button>
        </div>
      </div>
    )
  }
}

export default connect(state => ({
  settings: state.settings,
  shortcuts: state.shortcuts
}))(Settings)
