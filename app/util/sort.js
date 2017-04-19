const PRIORITIES = ['crit', 'high', 'med', 'low', 'none']

export const sortByType = (type) => {
  if (type === 'priority') return sortByPriority
}

function sortByProject(a,b) {
  return null // alphabetical sort
}

function sortByPriority(a,b) {
  if (typeof a === 'string') return sortByPriString(a,b)

  if (!!a.completedAt !== !!b.completedAt) {
    if (a.completedAt) return 1
    return -1
  } else {
    return sortByPriString(a.priority, b.priority)
  }
}
function sortByPriString(a,b) {
  if (PRIORITIES.indexOf(a) < PRIORITIES.indexOf(b)) return -1
  if (PRIORITIES.indexOf(a) > PRIORITIES.indexOf(b)) return 1
  return 0
}
