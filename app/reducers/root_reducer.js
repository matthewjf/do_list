import { combineReducers } from 'redux'
import TaskReducer from './task_reducer'
import SettingsReducer from './settings_reducer'
import ShortcutReducer from './shortcut_reducer'
import EditReducer from './edit_reducer'

export default combineReducers({
  tasks: TaskReducer,
  settings: SettingsReducer,
  shortcuts: ShortcutReducer,
  edit: EditReducer
})
