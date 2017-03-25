import React, { Component } from 'react'
import { addTask } from '../actions/task_actions'
import { connect } from 'react-redux'
import Select from 'react-select'
import key from 'keymaster'
import { codesToShortcut } from '../util/keycodes'

class Add extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    // TODO: unbind and rebind commands on prop change or use middleware?
    key(this.props.shortcuts.newTask, (evt, handler) => {
      // console.log(handler.shortcut, codesToShortcut(key.getPressedKeyCodes()))
      this.refs.description.focus()
      return false
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.dispatch(addTask(
      this.refs.description.value,
      this.refs.project.value,
      this.refs.priority.value
    ))
  }

  priorityOptions() {
    var optList = ['crit', 'high', 'med', 'low'].map(p => ({value: p, label: p}))
    optList.unshift({label: 'priority', value: 'none'})
    return optList
  }

  render() {
    let {shortcuts} = this.props
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input ref='description' type='text' placeholder={`new task (${shortcuts.newTask})`}></input>

          <input ref='project' type='text' placeholder='project'></input>

          <select name="priority" ref='priority'>
            {this.priorityOptions().map(opt =>
              <option value={opt.value} key={opt.value}>{opt.label}</option>
            )}
          </select>
          <input type='submit'></input>
        </form>
      </div>
    )
  }
}

export default connect(state => ({shortcuts: state.shortcuts}))(Add)
