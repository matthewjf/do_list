import { applyMiddleware } from 'redux'

const storageMiddleware = store => next => action => {
  let result = next(action)
  localStorage.setItem('dolist', JSON.stringify(store.getState()))
  return result
}

export default applyMiddleware(storageMiddleware)
