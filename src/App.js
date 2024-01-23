import React, { useState } from 'react'

// Components.
import { ErrorHandler } from '@tw/components'
import UserNameInput from '@tw/examples/UserNameInput'
import Header from '@tw/examples/Header'
import Heading from '@tw/examples/Heading'
import Modal from '@tw/examples/Modal'
import TwixSwitch from '@tw/examples/Switch'
import TwixtTextArea from '@tw/examples/TextArea'
import TwixtSampleTable from '@tw/examples/SampleTable'
import CommentsSystem from '@tw/examples/CommentsSystem'

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
            <Heading />
            <div className="flex h-full">
              <LeftSideBar />
              <ContentPane>
                <TwixSwitch />
                <UserNameInput />
                {/* Open modal button */}
                <button onClick={() => setOpen(true)} className="px-4 py-2 bg-indigo-500 text-white rounded-md">
                  Open Modal
                </button>
                <TwixtTextArea />
                <TwixtSampleTable />
                <CommentsSystem />
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
