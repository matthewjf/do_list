import React, { Component } from 'react'
import { connect } from 'react-redux'
import { showSettings } from '../actions/settings_actions'
import { removeAllTasks } from '../actions/task_actions'
import Modal from './modal'
import key from 'keymaster'
import Shortcuts from './shortcuts'
import TaskSettings from './task_settings'
import { updateSetting } from '../actions/settings_actions'

class Settings extends Component {
  constructor(props) {
    super(props)
    this.closeSettings = this.closeSettings.bind(this)
    this.removeAllTasks = this.removeAllTasks.bind(this)

    this.state = {
      show: false
    }
  }

  componentDidMount() {
    window.addEventListener('showSettings',() => {
      this.setState({show: true})
      key.setScope('settings')
    })

    window.addEventListener('closeSettings',() => {
      this.setState({show: false})
      key.setScope('list')
    })

    window.addEventListener('toggleGroupType', () => {
      let newType = this.props.settings.groupType === 'project' ? 'priority' : 'project'
      this.props.dispatch(updateSetting('groupType', newType))
    })
  }

  removeAllTasks() {
    if (window.confirm('are you sure?'))
      this.props.dispatch(removeAllTasks())
  }

  closeSettings(e) {
    if (e.currentTarget === e.target) {
      key.setScope('list')
      this.setState({show: false})
    }
  }

  render() {
    return (
      <Modal show={this.state.show} close={this.closeSettings}>
        <div id='settings'>
          <div id='settings-body'>
            <Shortcuts />
            <TaskSettings />
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
