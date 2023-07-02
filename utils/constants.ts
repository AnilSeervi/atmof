export const londonGeo = {
  lat: 51.5074,
  lon: 0.1278,
}

export const onError = () => {
  localStorage.removeItem('gps-granted')
}

const windDirectionsMap = new Map([
  [-11.25, 'N'],
  [11.25, 'NNE'],
  [33.75, 'NE'],
  [56.25, 'ENE'],
  [78.75, 'E'],
  [101.25, 'ESE'],
  [123.75, 'SE'],
  [146.25, 'SSE'],
  [168.75, 'S'],
  [191.25, 'SSW'],
  [213.75, 'SW'],
  [236.25, 'WSW'],
  [258.75, 'W'],
  [281.25, 'WNW'],
  [303.75, 'NW'],
  [326.25, 'NNW'],
])

export function getWindDirection(deg: number) {
  for (const [startDeg, direction] of windDirectionsMap) {
    const endDeg = (startDeg + 22.5) % 360 // Calculate the end degree
    if (endDeg >= 348.75) return 'N'
    if (deg >= startDeg && deg < endDeg) {
      return direction
    }
  }
  return null
}

type WindCondition = [number, number, string, string, string?]

const windConditions: WindCondition[] = [
  [0, 0.3, 'Calm', 'Smoke rises straight up', '0-1'],
  [0.3, 1.6, 'Light air', 'One can see downwind of the smoke drift', '1-3'],
  [
    1.6,
    3.4,
    'Light breeze',
    'One can feel the wind. The leaves on the trees move, the wind can lift small streamers.',
    '4-6',
  ],
  [
    3.4,
    5.5,
    'Gentle Breeze',
    'Leaves and twigs move. Wind extends light flag and pennants',
    '7-10',
  ],
  [
    5.5,
    8,
    'Moderate breeze',
    'The wind raises dust and loose papers, touches on the twigs and small branches, stretches larger flags and pennants',
    '11-16',
  ],
  [
    8,
    10.8,
    'Fresh Breeze',
    'Small trees in leaf begin to sway. The water begins little waves to peak',
    '17-21',
  ],
  [
    10.8,
    13.9,
    'Strong breeze',
    'Large branches and smaller tribes moves. The whiz of telephone lines. It is difficult to use the umbrella. A resistance when running.',
    '22-27',
  ],
  [
    13.9,
    17.2,
    'High wind, near gale',
    'Whole trees in motion. It is hard to go against the wind.',
    '28-33',
  ],
  [
    17.2,
    20.7,
    'Gale',
    'The wind break twigs of trees. It is hard to go against the wind.',
    '34-40',
  ],
  [
    20.8,
    24.5,
    'Severe Gale',
    'All large trees swaying and throws. Tiles can blow down.',
    '41-47',
  ],
  [
    24.5,
    28.5,
    'Storm',
    'Rare inland. Trees uprooted. Serious damage to houses.',
    '48-55',
  ],
  [
    28.5,
    32.7,
    'Violent Storm',
    'Occurs rarely and is followed by destruction.',
    '56-63',
  ],
  [32.7, 64, 'Hurricane', 'Occurs very rarely. Unusually severe damage.'],
]

export function getWindCondition(speed: number) {
  for (const condition of windConditions) {
    if (speed >= condition[0] && speed < condition[1]) {
      return {
        condition: condition[2],
        description: condition[3],
      }
    }
  }
  return null
}
