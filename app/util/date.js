export function stringNow() {
  var today = new Date();
  var month = today.getMonth() + 1
  var day = today.getDate()
  var year = today.getFullYear()
  return `${month}/${day}/${year}`
}
