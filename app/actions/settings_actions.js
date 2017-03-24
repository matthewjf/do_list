export const UPDATE_GROUP = `UPDATE_GROUP`

export const updateGroupBy = (groupType) => {
  return {
    type: UPDATE_GROUP,
    groupType: groupType
  }
}
