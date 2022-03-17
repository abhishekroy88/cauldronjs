import React from 'react'
import ReactDOM from 'react-dom'

import 'normalize.css'
import './index.css'

import App from './App/App'

const rootElem = document.getElementById('root')

ReactDOM.render(<App appName="CauldronJS" />, rootElem)

if (module.hot && process.env.NODE_ENV === 'development') {
  module.hot.accept('./App/App', () => {
    ReactDOM.render(<App />, rootElem)
  })
}
