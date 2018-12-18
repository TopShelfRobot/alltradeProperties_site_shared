import React from 'react'
import { withTheme } from 'emotion-theming'

const ThemeDump = props => <pre>{JSON.stringify(props.theme, null, 2)}</pre>

export default withTheme(ThemeDump)
