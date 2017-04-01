import React, { Component } from 'react'
import { addTask } from '../actions/task_actions'
import { connect } from 'react-redux'
import key from 'keymaster'

class NewTask extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.isValid = this.isValid.bind(this)
    this.resetForm = this.resetForm.bind(this)
    this.exitTask = this.exitTask.bind(this)
  }

  componentDidMount() {
    window.addEventListener('newTask', () => {
      this.refs.description.focus()
      key.setScope('task')
    })

    window.addEventListener('exitTask', this.exitTask)
  }

  exitTask() {
    this.resetForm()
    this.refs.description.blur()
    this.refs.project.blur()
    this.refs.priority.blur()
    window.focus()
    key.setScope('list')
  }

  handleSubmit(e) {
    e.preventDefault()

    this.props.dispatch(addTask(
      this.refs.description.value,
      this.refs.project.value,
      this.refs.priority.value
    ))

    this.exitTask()
  }

  isValid() {

  }

  resetForm() {
    this.refs.description.value = ''
    this.refs.project.value = ''
    this.refs.priority.value = 'none'
  }

  priorityOptions() {
    return ['none', 'crit', 'high', 'med', 'low'].map(p => ({value: p, label: p}))
  }

  render() {
    let { shortcuts } = this.props
    return (
      <div id='new-task'>
        <form onSubmit={this.handleSubmit}>
          <input ref='description' id='new-task-description' type='text' placeholder={`new task (${shortcuts.newTask.shortcut})`}></input>

          <input ref='project' type='text' placeholder='project'></input>

          <select name="priority" ref='priority'>
            {this.priorityOptions().map(opt =>
              <option value={opt.value} key={opt.value}>{opt.label}</option>
            )}
          </select>
          <input type='submit' tabIndex='-1'></input>
        </form>
      </div>
    )
  }
}

export default connect(state => ({
  settings: state.settings,
  shortcuts: state.shortcuts
}))(NewTask)
