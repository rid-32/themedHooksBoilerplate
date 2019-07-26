import React from 'react'
import { useSelector } from 'react-redux'

import * as selectors from 'ducks/application/selectors'

import 'stylesheets/styles'

const mapState = () => ({
  data: useSelector(selectors.getData),
})

const Application = () => {
  const { data } = mapState()

  console.log({ data })

  return <h1>Hello, Application</h1>
}

export default Application
