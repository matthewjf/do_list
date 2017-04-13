export function priorityColor(priority) {
  switch (priority) {
    case 'crit':
      return 'crit';
    case 'high':
      return 'high';
    case 'med':
      return 'med';
    case 'low':
      return 'low';
    default:
      return 'none';
  }
}

const COLORS = [
  'pink',
  'cyan',
  'lgreen',
  'yellow',
  'purple',
  'lblue',
  'teal',
  'lime',
  'red',
  'orange'
]

var colorMap = {NONE: 'gray-8'}
var currentIdx = 0

export function projectColor(name) {
  name = name || 'NONE'

  if (!colorMap[name]) {
    colorMap[name] = COLORS[currentIdx % COLORS.length]
    currentIdx += 1
  }

  return colorMap[name]
}
