import { UPDATE_SHORTCUT } from '../actions/shortcut_actions'

const defaultState = {
  newTask: {shortcut: '⌘+t', scope: 'list'},
  showSettings: {shortcut: '⌘+.', scope: 'list'},
  closeSettings: {shortcut: 'esc', scope: 'settings'},
  exitTask: {shortcut: 'esc', scope: 'task'},
  toggleGroupType: {shortcut: '⌘+,', scope: 'list'}
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
