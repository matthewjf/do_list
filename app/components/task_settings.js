import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateSetting } from '../actions/settings_actions'

class TaskSettings extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)

    this.state = {
      groupType: props.settings.groupType,
      requireProject: props.settings.requireProject,
      requirePriority: props.settings.requirePriority
    }
  }

  componentWillReceiveProps(props) {
    this.setState({
      groupType: props.settings.groupType,
      requireProject: props.settings.requireProject,
      requirePriority: props.settings.requirePriority
    })
  }

  handleChange(e) {
    var value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    this.props.dispatch(updateSetting(e.target.name, value))
  }

  render() {
    return (
      <div id='task-settings'>
        <h3>TASKS</h3>
        <label>
          group type
          <select value={this.state.groupType} name="groupType" onChange={this.handleChange}>
            <option value='project'>project</option>
            <option value='priority'>priority</option>
          </select>
        </label>
        <label>
          require project
          <input type="checkbox"
                 name="requireProject"
                 checked={this.state.requireProject}
                 onChange={this.handleChange} />
        </label>
        <label>
          require priority
          <input type="checkbox"
                 name="requirePriority"
                 checked={this.state.requirePriority}
                 onChange={this.handleChange} />
        </label>
      </div>
    )
  }
}

export default connect(state => ({settings: state.settings}))(TaskSettings)
