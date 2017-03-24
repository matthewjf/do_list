export const UPDATE_SHORTCUT = `UPDATE_SHORTCUT`

export const updateShortcut = (command, shortcut) => {
  return {
    type: UPDATE_SHORTCUT,
    data: {
      command: command,
      shortcut: shortcut
    }
  }
}
