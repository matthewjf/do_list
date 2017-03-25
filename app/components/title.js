import React, { Component } from 'react'
import { connect } from 'react-redux'
import gearIcon from '../../assets/gear'
import { showSettings } from '../actions/settings_actions'

class Title extends Component {
  showSettings() {
    window.dispatchEvent(new Event('showSettings'))
  }

  render() {
    return <div id='title'>
      <div style={{width: '24px'}}></div>
      <div>DO LIST</div>
      <div id='settings-button'
           className='tip'
           data-tip={`settings (${this.props.shortcuts.showSettings.shortcut})`}
           onClick={this.showSettings}
           dangerouslySetInnerHTML={{__html: gearIcon }} />
    </div>
  }
}

export default connect(state => ({shortcuts: state.shortcuts}))(Title)
