import React, { Component } from 'react'

export default class Checkbox extends Component {
  render() {
    return (
      <div className={`checkbox ${this.props.checked ? 'checked' : ''}`}>
      </div>
    )
  }
}
