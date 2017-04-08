import React, { Component } from 'react'
import Task from './task'
import { priorityColor, projectColor } from '../util/generate_colors'

export default class Group extends Component {
  constructor(props) {
    super(props)
    this.sortList = this.sortList.bind(this)
    this.renderTasks = this.renderTasks.bind(this)
    this.headerClass = this.headerClass.bind(this)
  }

  sortList() {
    var attr = this.props.groupType === 'project' ? 'priority' : 'project'
    return this.props.list.sort((a,b) => {
      if (!!a.completedAt !== !!b.completedAt) {
        if (a.completedAt) return 1
        return -1
      } else {
        if(a[attr] < b[attr]) return 1
        if(a[attr] > b[attr]) return -1
        return 0
      }
    })
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
