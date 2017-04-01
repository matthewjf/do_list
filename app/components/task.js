import React, {Component} from 'react'
import { projectColor, priorityColor } from '../util/generate_colors'

export default class Task extends Component {
  constructor(props) {
    super(props)
    this.projectClass = this.projectClass.bind(this)
    this.priorityClass = this.priorityClass.bind(this)
  }
  projectClass() {
    let {data} = this.props
    return `project bg-${projectColor(data.project)} ${!data.project ? 'gray-5' : ''}`
  }

  priorityClass() {
    let {data} = this.props
    return `priority bg-${priorityColor(data.priority)} ${data.priority === 'none' ? 'gray-5' : ''}`
  }

  render() {
    let {data} = this.props

    if (this.props.groupType === 'priority') {
      return (
        <div className='task'>
          <span className={this.projectClass()}>{data.project || 'NONE'}</span>
          <span className='description'>{data.description}</span>
        </div>
      )
    } else {
      return (
        <div className='task'>
          <span className={this.priorityClass()}>
            {data.priority}
          </span>
          <span className='description'>{data.description}</span>
        </div>
      )
    }
  }
}
