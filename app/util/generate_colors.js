export function priorityColor(priority) {
  switch (priority) {
    case 'crit':
      return 'red';
    case 'high':
      return 'orange';
    case 'med':
      return 'blue';
    case 'low':
      return 'green';
    default:
      return 'gray-8';
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
  'green',
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
