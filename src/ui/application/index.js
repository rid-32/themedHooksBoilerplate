import React, { useState } from 'react'

import { toggleTheme } from 'utils/themes'

import './styles'

const Application = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <span className="counter">{counter}</span>

      <button
        className="counter__control"
        onClick={() => setCounter(counter + 1)}
      >
        Increase!
      </button>

      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  )
}

export default Application
