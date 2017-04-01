export const UPDATE_SETTING = `UPDATE_SETTING`

export const updateSetting = (setting, value) => {
  return {
    type: UPDATE_SETTING,
    setting: setting,
    value: value
  }
}
