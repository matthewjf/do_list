import { applyMiddleware } from 'redux'
import { UPDATE_SHORTCUT } from '../actions/shortcut_actions'
import key from 'keymaster'

const storageMiddleware = store => next => action => {
  let result = next(action)
  localStorage.setItem('dolist', JSON.stringify(store.getState()))
  return result
}

const shortcutMiddleware = store => next => action => {
  if (action.type === UPDATE_SHORTCUT) {
    let command = action.data.command
    let oldState = store.getState()
    if ( oldState.shortcuts[command] !== action.data.shortcut ) {
      key.unbind(oldState.shortcuts[command])
      key(action.data.shortcut, action.data.scope, () => {
        window.dispatchEvent(new Event(action.data.command))
      })
    }
  }
  next(action)
}

export default applyMiddleware(shortcutMiddleware, storageMiddleware)
