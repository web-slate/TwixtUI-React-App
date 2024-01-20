import React from 'react'

// Components.
import { ErrorHandler } from '@tw/components'
import UserNameInput from '@tw/examples/UserNameInput'
import { Header, LeftSideBar, RightSideBar, ContentPane } from '@tw/examples/Skeleton'

function App() {
  return (
    <>
      <ErrorHandler>
        <div class="flex h-screen bg-green-300">
          <div class="flex-1 flex flex-col overflow-hidden">
            <Header />
            <div class="flex h-full">
              <LeftSideBar />
              <ContentPane />
              <RightSideBar />
            </div>
          </div>
        </div>
      </ErrorHandler >
    </>
  )
}

export default App
