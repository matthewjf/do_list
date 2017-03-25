import React, { Component } from 'react'
import { connect } from 'react-redux'
import { showSettings } from '../actions/settings_actions'
import { removeAllTasks } from '../actions/task_actions'
import Modal from './modal'
import key from 'keymaster'

class Settings extends Component {
  constructor(props) {
    super(props)
    this.closeSettings = this.closeSettings.bind(this)
    this.removeAllTasks = this.removeAllTasks.bind(this)

    this.state = {show: false}
  }

  componentDidMount() {
    window.addEventListener('showSettings',() => {
      key.setScope('settings')
      this.setState({show: true})
    })

    window.addEventListener('closeSettings',() => {
      key.setScope('list')
      this.setState({show: false})
    })
  }

  removeAllTasks() {
    if (window.confirm('are you sure?'))
      this.props.dispatch(removeAllTasks())
  }

  closeSettings(e) {
    e.preventDefault()
    if (e.currentTarget === e.target) {
      key.setScope('list')
      this.setState({show: false})
    }
  }

  render() {
    return (
      <Modal close={this.closeSettings} show={this.state.show}>
        <div id='settings'>
          <div id='settings-body'>
            <h3>Shortcuts</h3>
          </div>
          <div id='settings-footer'>
            <button onClick={this.removeAllTasks} className='red'>delete all tasks</button>
            <button onClick={this.closeSettings}>close</button>
          </div>
        </div>
      </Modal>
    )
  }
}

export default connect(state => ({
  settings: state.settings,
  shortcuts: state.shortcuts
}))(Settings)
