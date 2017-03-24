import React, {Component} from 'react'
import { addTask } from '../actions/task_actions'
import { connect } from 'react-redux'
import key from 'keymaster'
import {codesToShortcut} from '../util/keycodes'

class Add extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    key(this.props.shortcuts.newTask, (evt, handler) => {
      console.log(handler.shortcut, codesToShortcut(key.getPressedKeyCodes()))
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

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input ref='description' type='text' placeholder='add new task'></input>
          <input ref='project' type='text' placeholder='project'></input>
          <input ref='priority' type='text' placeholder='priority'></input>
          <input type='submit'></input>
        </form>
      </div>
    )
  }
}

export default connect(state => ({shortcuts: state.shortcuts}))(Add)
