import React, {Component} from 'react'
import Modal from './modal'
import { connect } from 'react-redux'
import NewTask from './new_task'

class Edit extends Component {
  render() {
    return (
      <Modal show={true} close={this.props.close}>

      </Modal>
    )
  }
}

export default connect(state => ({}))(Edit)
