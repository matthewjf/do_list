import React, { Component } from 'react'
import { connect } from 'react-redux'
import Group from './group'
import TaskSettings from './task_settings'

class List extends Component {
  constructor(props) {
    super(props)
    this.generateGroupList = this.generateGroupList.bind(this)
    this.shouldShowTask = this.shouldShowTask.bind(this)
    this.renderTasks = this.renderTasks.bind(this)
  }

  generateGroupList() {
    let { list } = this.props.tasks
    let { groupType } = this.props.settings
    var taskGroups = {}
    Object.keys(list).forEach((id) => {
      var group = list[id][groupType] || 'NONE'
      taskGroups[group] = taskGroups[group] || []
      if (this.shouldShowTask(list[id].completedAt))
        taskGroups[group].push(list[id])
    })
    return taskGroups
  }

  shouldShowTask(completedAt) {
    let expirationTime = 1000 * 3600 * 24 * this.props.settings.hideCompletedAfter
    return !completedAt || (Date.now() - new Date(completedAt) < expirationTime)
  }

  renderTasks() {
    let { groupType } = this.props.settings
    var taskGroups = this.generateGroupList()
    return Object.keys(taskGroups).sort().map((group) => {
      return <Group list={taskGroups[group]} groupType={groupType} group={group} key={group} />
    })
  }

  render() {
    return (
      <div id='list'>
        {this.renderTasks()}
      </div>
    )
  }
}

export default connect(state => ({tasks: state.tasks, settings: state.settings}))(List)
