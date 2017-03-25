import React, { Component } from 'react'

export default class Modal extends Component {
  render() {
    return (
      <div className={`modal ${this.props.show ? '' : 'hidden'}`} onClick={this.props.close}>
        {this.props.children}
      </div>
    )
  }
}
