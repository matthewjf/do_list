import React, { Component } from 'react'
import { connect } from 'react-redux'

class Settings extends Component {
  render() {
    return
  }
}

export default connect(state => ({settings: state.settings}))(Settings)
