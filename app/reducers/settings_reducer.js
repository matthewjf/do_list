import { UPDATE_SETTING } from '../actions/settings_actions'

const defaultState = {
  groupType: 'project',
  requireProject: false,
  requirePriority: false
}

const SettingsReducer = (state=defaultState, action) => {
  switch (action.type) {
    case UPDATE_SETTING:
      return Object.assign({}, state, {[action.setting]: action.value})
    default:
      return state;
  }
}

export default SettingsReducer
