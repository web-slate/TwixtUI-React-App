import React, { useState } from 'react'

import { TwixtCommentsSystem, TwixtLoadingPostCard, TwixtButton, TwixtMultiLineInput, TwixtSwitch, LeftSideBar, RightSideBar, ContentPane } from 'TwixtUI/react';

// Components.
import { ErrorHandler } from '@tw/components'
import UserNameInput from '@tw/examples/UserNameInput'
import SampleAppHeader from '@tw/examples/Header'
import Heading from '@tw/examples/Heading'
import Modal from '@tw/examples/Modal'
import FruitsTable from '@tw/examples/SimpleTable'

function App() {
  const [isOpen, setOpen] = useState(false);
  const [openLeftSideBar, setToOpenLeftSideBar] = useState(false);

  return (
    <>
      <ErrorHandler>
        {isOpen && <Modal onSubmit={() => setOpen(false)} />}
        <div className="flex h-screen bg-green-300">
          <div className="flex-1 flex flex-col overflow-hidden">
            <SampleAppHeader />
            <div className="flex h-full">
              <LeftSideBar openDrawer={openLeftSideBar}>
                <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700">Home</a>
                <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700">About</a>
                <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700">Services</a>
                <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700">Contact</a>
              </LeftSideBar>
              <ContentPane>
                <TwixtLoadingPostCard />
                <Heading />
                <TwixtSwitch label="Toggle" onChange={status => {
                  console.log('status: ', status)
                }} />
                <UserNameInput />
                <TwixtButton onClick={() => setOpen(true)}>
                  Open Modal
                </TwixtButton>
                <TwixtMultiLineInput />
                <FruitsTable />
                <TwixtCommentsSystem />
                <div className="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-green-400 border-b border-gray-600">Post</div>
              </ContentPane>
              <RightSideBar>Rightbar</RightSideBar>
            </div>
          </div>
        </div>
      </ErrorHandler >
    </>
  )
}

export default App
