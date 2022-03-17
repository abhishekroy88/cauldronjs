// @flow

import * as React from 'react'
import { hot } from 'react-hot-loader'

import classes from './App.module.css'

type Props = {
  appName: string,
}

const App = (props: Props): React.Node => {
  return <h1 className={classes.App}>{props.appName}</h1>
}

export default hot(module)(App)
