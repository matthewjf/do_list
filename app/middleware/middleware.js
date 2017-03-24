import { applyMiddleware } from 'redux'

const storageMiddleware = store => next => action => {
  let result = next(action)
  localStorage.setItem('getdone', JSON.stringify(store.getState()))
  return result
}

export default applyMiddleware(storageMiddleware)
