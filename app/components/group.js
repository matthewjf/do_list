import React, { Component } from 'react'
import Task from './task'

export default class Group extends Component {
  constructor(props) {
    super(props)
    this.renderTasks = this.renderTasks.bind(this)
  }

  renderTasks() {
    return this.props.list.map((task) => {
      return <Task data={task} key={task.id}/>
    })
  }

  render() {
    return (
      <div className='grouping'>
        <h1>{this.props.group}</h1>
        {this.renderTasks()}
      </div>
    )
  }
}
