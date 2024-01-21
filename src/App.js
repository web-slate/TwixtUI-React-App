import React, { useState } from 'react'

// Components.
import { ErrorHandler } from '@tw/components'
import UserNameInput from '@tw/examples/UserNameInput'
import Header from '@tw/examples/Header'
import Modal from '@tw/examples/Modal'
import { LeftSideBar, RightSideBar, ContentPane } from '@tw/examples/Skeleton'

function App() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <ErrorHandler>
        {isOpen && <Modal onSubmit={() => setOpen(false)} />}
        <div className="flex h-screen bg-green-300">
          <div className="flex-1 flex flex-col overflow-hidden">
            <Header />
            <div className="flex h-full">
              <LeftSideBar />
              <ContentPane>
                <UserNameInput />
                {/* Open modal button */}
                <button onClick={() => setOpen(true)} className="px-4 py-2 bg-indigo-500 text-white rounded-md">
                  Open Modal
                </button>
              </ContentPane>
              <RightSideBar />
            </div>
          </div>
        </div>
      </ErrorHandler >
    </>
  )
}

export default App
