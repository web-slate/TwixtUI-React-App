import React from 'react'

// Components.
import { ErrorHandler } from '@tw/components'
import UserNameInput from '@tw/examples/UserNameInput'
import Header from '@tw/examples/Header'

function App() {
  return (
    <>
      <ErrorHandler>
        <h1>Light React App with TwixtUI</h1>
        <div>
          <UserNameInput />
        </div>
        <Header />
      </ErrorHandler>
    </>
  )
}

export default App
