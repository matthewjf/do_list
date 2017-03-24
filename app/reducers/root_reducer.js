import { combineReducers } from 'redux'
import TaskReducer from './task_reducer'
import SettingsReducer from './settings_reducer'
import ShortcutReducer from './shortcut_reducer'

export default combineReducers({
  tasks: TaskReducer,
  settings: SettingsReducer,
  shortcuts: ShortcutReducer
})
