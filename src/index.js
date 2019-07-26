import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from 'utils/store'

import Application from 'ui/application'

ReactDOM.render(
  <Provider store={store}>
    <Application />
  </Provider>,
  document.getElementById('app-root'),
)
