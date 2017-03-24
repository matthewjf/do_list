import React, { Component } from 'react'
import gearIcon from '../../assets/gear'

export default class Title extends Component {
  render() {
    return <div id='title'>
      <div style={{width: '24px'}}></div>
      <div>GET DONE</div>
      <div id='settings-button' dangerouslySetInnerHTML={{__html: gearIcon }} />
    </div>
  }
}
