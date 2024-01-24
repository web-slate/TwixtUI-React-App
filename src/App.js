import React, { useState } from 'react'

import { TwixtButton, TwixtMultiLineInput } from 'TwixtUI/react';

// Components.
import { ErrorHandler } from '@tw/components'
import UserNameInput from '@tw/examples/UserNameInput'
import Header from '@tw/examples/Header'
import Heading from '@tw/examples/Heading'
import Modal from '@tw/examples/Modal'
import TwixSwitch from '@tw/examples/Switch'
import TwixtSimpleTable from '@tw/examples/SimpleTable'
import CommentsSystem from '@tw/examples/CommentsSystem'
import LoadingPostCard from '@tw/examples/LoadingPostCard'

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
              <LoadingPostCard />
                <Heading />
                <TwixSwitch />
                <UserNameInput />
                {/* Open modal button */}
                <TwixtButton onClick={() => setOpen(true)}>
                  Open Modal
                </TwixtButton>
                <TwixtMultiLineInput />
                <TwixtSimpleTable />
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
