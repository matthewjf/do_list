import React, {Component} from 'react'
import Modal from './modal'
import { connect } from 'react-redux'
import NewTask from './new_task'
import { hideEdit } from '../actions/edit_actions'

class Edit extends Component {
  constructor(props) {
    super(props)
    this.close = this.close.bind(this)
    this.renderForm = this.renderForm.bind(this)
  }

  close(e) {
    if (e.currentTarget === e.target)
      this.props.dispatch(hideEdit())
  }

  renderForm() {
    let task = this.props.tasks.list[this.props.edit.id] || {}
    return <NewTask
            id={this.props.edit.id}
            description={task.description}
            project={task.project}
            priority={task.priority} />
  }

  render() {
    return (
      <Modal show={this.props.edit.show} close={this.close}>
        {this.renderForm()}
      </Modal>
    )
  }
}

export default connect(state => ({tasks: state.tasks, edit: state.edit}))(Edit)
