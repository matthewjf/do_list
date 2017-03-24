import React, {Component} from 'react'

export default class Task extends Component {
  render() {
    let {data} = this.props

    return (
      <div className='task'>
        {data.description}
      </div>
    )
  }
}
