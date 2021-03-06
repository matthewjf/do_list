export const ADD_TASK = `ADD_TASK`
export const COMPLETE_TASK = `COMPLETE_TASK`
export const UPDATE_TASK = `UPDATE_TASK`
export const REMOVE_ALL_TASKS = `REMOVE_ALL_TASKS`
export const REMOVE_TASK = `REMOVE_TASK`

// description, project(optional), priority(optional)

export const addTask = (description, project, priority) => {
  return {
    type: ADD_TASK,
    task: {
      description: description,
      project: project,
      priority: priority,
      completedAt: null
    }
  }
}

export const completeTask = (id) => {
  return {
    type: COMPLETE_TASK,
    id: id
  }
}

export const updateTask = (id, task) => {
  return {
    type: UPDATE_TASK,
    id: id,
    task: task
  }
}

export const removeTask = (id) => {
  return {
    type: REMOVE_TASK,
    id: id
  }
}

export const removeAllTasks = () => ({type: REMOVE_ALL_TASKS})
