import React, { useState } from 'react'

import {
  TwixtCommentsSystem,
  TwixtLoadingPostCard,
  TwixtButton,
  TwixtMultiLineInput,
  TwixtSwitch,
  LeftSideBar,
  RightSideBar,
  ContentPane,
  TwixtUserCard,
  TwixtDialog,
  TwixtStats,
  TwixtPageProgressLine,
} from 'TwixtUI/react';

// Components.
import { ErrorHandler } from '@tw/components'
import UserNameInput from '@tw/examples/UserNameInput'
import SampleAppHeader from '@tw/examples/Header'
import Heading from '@tw/examples/Heading'
import Modal from '@tw/examples/Modal'
import FruitsTable from '@tw/examples/SimpleTable'
import { usersCardList, statItems} from '@tw/examples/data';

function App() {
  const [openModal, setToOpenModal] = useState(false);
  const [showDialog, setToShowDialog] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const onHamburgerClick = () => {
    setOpenDrawer(!openDrawer);
  }

  return (
    <>
      <ErrorHandler>
        {showDialog && <TwixtDialog
          title="Deactivate account"
          desc="Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone."
          footer={(
            <>
              <TwixtButton overwriteClass="px-4 py-2 ml-2 bg-indigo-500 text-white rounded-md" onClick={() => {
                setToShowDialog(false);
              }}>
                Deactivate
              </TwixtButton>
              <TwixtButton overwriteClass="px-4 py-2 bg-indigo-500 text-white rounded-md" onClick={() => {
                setToShowDialog(false);
              }}>
                Cancel
              </TwixtButton>
            </>
          )}
        />}
        {openModal && <Modal onSubmit={() => setToOpenModal(false)} />}
        <div className="flex h-screen bg-green-300">
          <div className="flex-1 flex flex-col overflow-hidden">
            <SampleAppHeader onHamburgerClick={onHamburgerClick} />
            <div className="flex h-full">
              <LeftSideBar openDrawer={openDrawer}>
                <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700">Home</a>
                <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700">About</a>
                <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700">Services</a>
                <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700">Contact</a>
              </LeftSideBar>
              <ContentPane>
                {/* <div class="flex -space-x-2 overflow-hidden">
                  <img class="inline-block h-7 w-7 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  <img class="inline-block h-7 w-7 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                  <img class="inline-block h-7 w-7 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" alt="" />
                  <img class="inline-block h-7 w-7 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                </div> */}

                <TwixtPageProgressLine />
                <div class="grid sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3">
                  {usersCardList.map(detail => {
                    return (
                      <TwixtUserCard title={detail?.title} subTitle={detail?.subTitle} stats={detail?.stats} cardImageUrl={detail?.cardImageUrl}
                        cardBackgroundUrl={detail?.cardBackgroundUrl} />
                    )
                  })}
                </div>

                <Heading />
                <TwixtLoadingPostCard />
                <TwixtSwitch label="Toggle" onChange={status => {
                  console.log('status: ', status)
                }} />
                <UserNameInput />
                <TwixtButton onClick={() => setToShowDialog(true)}>
                  Open Dialog
                </TwixtButton><br />
                <TwixtButton onClick={() => setToOpenModal(true)}>
                  Open Modal
                </TwixtButton>
                <TwixtMultiLineInput />
                <FruitsTable />
                <TwixtCommentsSystem />
                <TwixtStats items={statItems} />
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
