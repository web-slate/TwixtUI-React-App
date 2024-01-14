import React from 'react'
import { ToolName } from 'TwixtUI/react'

// Components.
import { ErrorHandler } from '@tw/components'
import UserNameInput from '@tw/examples/UserNameInput'

function App() {
  return (
    <>
      <ErrorHandler>
        <ToolName name="Dash" />
        <h1>Light React App with TwixtUI</h1>
        <div>
          <UserNameInput />
        </div>
      </ErrorHandler>
    </>
  )
}

export default App
