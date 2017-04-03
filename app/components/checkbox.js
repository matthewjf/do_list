import React, { Component } from 'react'
import Checked from '../../assets/checked'
import Unchecked from '../../assets/unchecked'

export default class Checkbox extends Component {
  render() {
    return <div className='checkbox'
                dangerouslySetInnerHTML={{__html: this.props.checked ? Checked : Unchecked}}
                onClick={this.props.onClick}></div>
  }
}
