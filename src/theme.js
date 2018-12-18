import { injectGlobal } from 'emotion'
import facepaint from 'facepaint'
import shadeBlend from './lib/shadeBlend'

injectGlobal`
  * {
    box-sizing: border-box;
  }
  body {
		font: 14px/21px "HelveticaNeue", "Helvetica Neue", Helvetica, Arial, sans-serif;
		color: #444;
		-webkit-font-smoothing: antialiased; /* Fix for webkit rendering */
		-webkit-text-size-adjust: 100%;
 }
`

const colorDelta = 0.7
const breakpoints = [600, 768, 992, 1200]

const theme = {
  lighten: (c, p = colorDelta) => shadeBlend(p, c),
  darken: (c, p = colorDelta) => shadeBlend(-1 * p, c),
  colors: {
    yellow: '#ffd90e',
    blue: '#34b9ff',
    red: '#9e1a1a',
    darkRed: '#5e0d0d',
    black: '#2a272c',
  },
  breakpoints,
  mq: facepaint(breakpoints.map(bp => `@media (min-width: ${bp}px)`)),
}

export default theme
