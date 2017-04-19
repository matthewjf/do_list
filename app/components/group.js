import React, { Component } from 'react'
import Task from './task'
import { priorityColor, projectColor } from '../util/generate_colors'
import { sortByType } from '../util/sort'

export default class Group extends Component {
  constructor(props) {
    super(props)
    this.sortList = this.sortList.bind(this)
    this.renderTasks = this.renderTasks.bind(this)
    this.headerClass = this.headerClass.bind(this)
  }

  sortList() {
    var sortType = this.props.groupType === 'project' ? 'priority' : 'project'
    return this.props.list.sort(sortByType(sortType))
  }

  renderTasks() {
    return this.sortList().map((task) => {
      return <Task data={task} key={task.id} groupType={this.props.groupType} idx={this.props.idx}/>
    })
  }

  headerClass() {
    var color
    if (this.props.groupType === 'project')
      color = projectColor(this.props.group)
    else
      color = priorityColor(this.props.group)

    return `group-header ${color}`
  }

  render() {
    if (this.props.list.length > 0)
      return (
        <div className='grouping'>
          <h1 className={this.headerClass()}>{this.props.group}</h1>
          {this.renderTasks()}
        </div>
      )
    else return null
  }
}
