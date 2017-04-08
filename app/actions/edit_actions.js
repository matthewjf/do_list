export const SHOW_EDIT = `SHOW_EDIT`
export const HIDE_EDIT = `HIDE_EDIT`

export const showEdit = (id) => {
  return {
    type: SHOW_EDIT,
    id: id
  }
}

export const hideEdit = () => {
  return {
    type: HIDE_EDIT
  }
}
