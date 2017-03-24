import keycode from 'keycode'

var modifierMap = {
    16:'⇧',
    18:'⌥',
    17:'⌃',
    91:'⌘',
    93: '⌘'
}

function isMod(code) {
  return !!modifierMap[code]
}

export function codesToShortcut(codes) {
  var mods = []
  var chars = []
  codes.forEach(code => {
    if (isMod(code)) mods.push(modifierMap[code])
    else chars.push(keycode(code))
  })
  return mods.concat(chars).join('+')
}
