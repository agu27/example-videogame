const emojis = {
    '-': " ",
    'O': "🚪",
    'X': "💣",
    'I': "🎁",
    'PLAYER': "💀",
    'BOMB_COLLISION': "🔥",
    'GAME_OVER': "👎",
    'WIN': "🏆",
  };
  const maps = [];
  maps.push(`
    IXXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    -XXXXXXXXX
    OXXXXXXXXX
  `);
  maps.push(`
    O--XXXXXXX
    X--XXXXXXX
    XX----XXXX
    X--XX-XXXX
    X-XXX--XXX
    X-XXXX-XXX
    XX--XX--XX
    XX--XXX-XX
    XXXX---IXX
    XXXXXXXXXX
    `);
  maps.push(`
    I-----XXXX
    XXXXX-XXXX
    XX----XXXX
    XX-XXXXXXX
    XX-----XXX
    XXXXXX-XXX
    XX-----XXX
    XX-XXXXXXX
    XX-----OXX
    XXXXXXXXXX
  `);
  maps.push(`
  OXXXX----X
  ------XX-X
  XX-X-XX-XX
  ---XX---XX
  -XX---X--X
  --X-XXXX-X
  X-XXX-----
  ----X-XXX-
  -XX-----X-
  --XXXX-XXI
`);
maps.push(`
  ---X----IX
  -X---XXXXX
  --XXXXX---
  X--XX---X-
  XX----XX--
  XXXXXX---X
  X---X--XXX
  X-X---X---
  X-XXXXX-X-
  X-------XO
`);