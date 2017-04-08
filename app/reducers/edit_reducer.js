import { SHOW_EDIT, HIDE_EDIT } from '../actions/edit_actions'
import key from 'keymaster'

const EditReducer = (state={}, action) => {
  switch (action.type) {
    case SHOW_EDIT:
      key.setScope('edit')
      return {show: true, id: action.id}
    case HIDE_EDIT:
      key.setScope('list')
      return {}
    default:
      return state;
  }
}

export default EditReducer
