import { UPDATE_SHORTCUT } from '../actions/shortcut_actions'

const defaultState = {
  newTask: '⌘+t',
  showSettings: '⌘+,'
}

const ShortcutReducer = (state=defaultState, action) => {
  switch (action.type) {
    case UPDATE_SHORTCUT:
      var shortcuts = Object.assign({}, state.shortcuts, action.data)
      return Object.assign({}, state, {shortcuts: shortcuts})
    default:
      return state;
  }
}

export default ShortcutReducer
