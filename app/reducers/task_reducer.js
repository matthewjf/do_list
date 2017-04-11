import {
  ADD_TASK,
  COMPLETE_TASK,
  UPDATE_TASK,
  REMOVE_ALL_TASKS,
  REMOVE_TASK
} from '../actions/task_actions'
import { stringNow } from '../util/date'
import { normalizeTask } from '../util/normalize'

const defaultState = {_idx: 0, list: {}}

const TaskReducer = (state=defaultState, action) => {
  switch (action.type) {
    case ADD_TASK:
      var newList = Object.assign({}, state.list)
      var newIdx = state._idx + 1
      var newTask = normalizeTask(action.task)
      newTask.id = newIdx
      newList[newIdx] = newTask
      return {_idx: newIdx, list: newList}
    case COMPLETE_TASK:
      var task = Object.assign({}, state.list[action.id])
      task.completedAt = stringNow()
      var newList = Object.assign({}, state.list)
      newList[action.id] = task
      return {_idx: state._idx, list: newList}
    case UPDATE_TASK:
      var newList = Object.assign({}, state.list)
      var newTask = normalizeTask(action.task)
      newTask.id = action.id
      newList[action.id] = newTask
      return {_idx: state._idx, list: newList}
    case REMOVE_ALL_TASKS:
      return {_idx: 0, list: {}}
    case REMOVE_TASK:
      var newList = Object.assign({}, state.list)
      delete newList[action.id]
      return {_idx: state._idx, list: newList}
    default:
      return state;
  }
}

export default TaskReducer
