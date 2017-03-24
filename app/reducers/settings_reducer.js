import { UPDATE_GROUP } from '../actions/settings_actions'

const defaultState = {
  groupType: 'project',
  requireProject: false,
  requirePriority: false,
}

const SettingsReducer = (state=defaultState, action) => {
  switch (action.type) {
    case UPDATE_GROUP:
      return Object.assign({}, state, {groupType: action.groupType})
    default:
      return state;
  }
}

export default SettingsReducer
