import React, { Component } from 'react'
import { addTask, updateTask } from '../actions/task_actions'
import { hideEdit } from '../actions/edit_actions'
import { connect } from 'react-redux'
import key from 'keymaster'

class NewTask extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.validate = this.validate.bind(this)
    this.resetForm = this.resetForm.bind(this)
    this.exitTask = this.exitTask.bind(this)
    this.onBlur = this.onBlur.bind(this)
    this.onFocus = this.onFocus.bind(this)
    this.handleChange = this.handleChange.bind(this)

    this.state = Object.assign({}, this.emptyState(), props)
  }

  emptyState() {
    return {
      description: '',
      project: '',
      priority: 'none',
      errors: {}
    }
  }

  componentDidMount() {
    window.addEventListener('newTask', () => {
      this.refs.description.focus()
    })

    window.addEventListener('exitTask', this.exitTask)
    window.addEventListener('exitEdit', this.exitTask)
  }

  componentWillReceiveProps(props) {
    if (props.id)
      this.setState({
        description: props.description,
        project: props.project,
        priority: props.priority
      })
  }

  exitTask() {
    this.props.dispatch(hideEdit())
    this.resetForm()
    this.refs.description.blur()
    this.refs.project.blur()
    this.refs.priority.blur()
    window.focus()
    key.setScope('list')
  }

  handleSubmit(e) {
    e.preventDefault()
    if (!this.validate()) return

    if (this.props.id)
      this.props.dispatch(updateTask(
        this.props.id,
        { description: this.state.description,
          project: this.state.project,
          priority: this.state.priority }
      ))
    else
      this.props.dispatch(addTask(
        this.state.description,
        this.state.project,
        this.state.priority
      ))

    this.exitTask()
  }

  handleChange(e) {
    this.setState({[e.target.name]: e.target.value})
  }

  validate() {
    let { requireProject, requirePriority } = this.props.settings
    let { description, project, priority } = this.state
    let newState = {errors: {}}

    if (!description) newState.errors.description = true
    if (requireProject && !project) newState.errors.project = true
    if (requirePriority && priority === 'none') newState.errors.priority = true

    if (Object.keys(newState.errors).length) {
      this.setState(newState)
      return false
    } else {
      return true
    }
  }

  resetForm() {
    this.setState(this.emptyState())
  }

  priorityOptions() {
    return ['none', 'crit', 'high', 'med', 'low'].map(p => ({value: p, label: p}))
  }

  getClass(name) {
    return this.state.errors[name] ? 'error' : ''
  }

  onBlur() {
    this.blur = setTimeout(() => {
      key.setScope('list')
      this.setState({errors: {}})
    }, 200)
  }

  onFocus() {
    clearTimeout(this.blur)
    if (!this.props.id) key.setScope('task')
  }

  render() {
    let { shortcuts } = this.props
    return (
      <div id='new-task'>
        <form onSubmit={this.handleSubmit} onBlur={this.onBlur} onFocus={this.onFocus}>
          <input ref='description'
                 name='description'
                 id='new-task-description'
                 type='text'
                 placeholder={`new task (${shortcuts.newTask.shortcut})`}
                 className={this.getClass('description')}
                 value={this.state.description}
                 onChange={this.handleChange} />

          <input ref='project'
                 name='project'
                 type='text'
                 placeholder='project'
                 className={this.getClass('project')}
                 value={this.state.project}
                 onChange={this.handleChange} />

          <select
              ref='priority'
              name="priority"
              className={this.getClass('priority')}
              value={this.state.priority}
              onChange={this.handleChange} >
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
