export const UPDATE_SHORTCUT = `UPDATE_SHORTCUT`

export const updateShortcut = (command, shortcut, scope='all') => {
  return {
    type: UPDATE_SHORTCUT,
    data: {
      command: command,
      shortcut: shortcut,
      scope: scope
    }
  }
}
