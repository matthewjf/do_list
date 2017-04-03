import React, {Component} from 'react'
import { projectColor, priorityColor } from '../util/generate_colors'
import Checkbox from './checkbox'
import {completeTask, updateTask, removeTask} from '../actions/task_actions'
import { connect } from 'react-redux'
import Trash from '../../assets/trash'
import Pencil from '../../assets/pencil'
import EditTask from './edit_task'

class Task extends Component {
  constructor(props) {
    super(props)
    this.projectClass = this.projectClass.bind(this)
    this.priorityClass = this.priorityClass.bind(this)
    this.taskClass = this.taskClass.bind(this)
    this.descriptionClass = this.descriptionClass.bind(this)
    this.isCompleted = this.isCompleted.bind(this)
    this.handleComplete = this.handleComplete.bind(this)
    this.renderCheckbox = this.renderCheckbox.bind(this)
    this.delete = this.delete.bind(this)
    this.edit = this.edit.bind(this)
    this.closeEdit = this.closeEdit.bind(this)
    this.renderEdit = this.renderEdit.bind(this)

    this.state = {}
  }

  projectClass() {
    let {data} = this.props
    return `project bg-${projectColor(data.project)} ${!data.project ? 'gray-5' : ''} ${this.props.groupType === 'priority' ? '' : 'hidden'}`
  }
  priorityClass() {
    let {data} = this.props
    return `priority bg-${priorityColor(data.priority)} ${data.priority === 'none' ? 'gray-4' : ''} ${this.props.groupType === 'priority' ? 'hidden' : ''}`
  }
  taskClass() {
    return `task ${this.isCompleted() ? 'completed' : ''}`
  }
  descriptionClass() {
    return `description ${this.isCompleted() ? 'gray-6' : ''}`
  }

  handleComplete(e) {
    let {data} = this.props
    if (this.isCompleted()) {
      let newTask = Object.assign({}, data)
      newTask.completedAt = undefined
      this.props.dispatch(updateTask(data.id, newTask))
    } else {
      this.props.dispatch(completeTask(this.props.data.id))
    }
  }

  renderCheckbox() {
    return <Checkbox checked={this.props.data.completedAt} onClick={this.handleComplete} />
  }

  isCompleted() {
    return !!this.props.data.completedAt
  }

  delete() {
    this.props.dispatch(removeTask(this.props.data.id))
  }

  edit() {
    this.setState({showEdit: true})
  }

  closeEdit() {
    this.setState({showEdit: false})
  }

  renderEdit() {
    if (this.state.showEdit)
      return <EditTask close={this.closeEdit} />
  }

  render() {
    let {data} = this.props

    return (
      <div className={this.taskClass()}>
        {this.renderCheckbox()}
        <span className={this.priorityClass()}>{data.priority}</span>
        <span className={this.projectClass()}>{data.project || 'NONE'}</span>
        <span className={this.descriptionClass()}>{data.description}</span>
        <div className='edit' onClick={this.edit} dangerouslySetInnerHTML={{__html: Pencil}}/>
        {/* {this.renderEdit()} */}
        <div className='delete' onClick={this.delete} dangerouslySetInnerHTML={{__html: Trash}}/>
      </div>
    )
  }
}

export default connect(state => ({}))(Task)
