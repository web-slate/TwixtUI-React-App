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
  TwixtUserStackList,
  TwixtPostItemList
} from 'TwixtUI/react';

// Components.
import { ErrorHandler } from '@tw/components'
import UserNameInput from '@tw/examples/UserNameInput'
import SampleAppHeader from '@tw/examples/Header'
import Heading from '@tw/examples/Heading'
import Modal from '@tw/examples/Modal'
import FruitsTable from '@tw/examples/SimpleTable'
import { usersCardList, statItems, userStackList, postItemList } from '@tw/examples/data';

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
                <TwixtPageProgressLine />
                <TwixtPostItemList items={postItemList} />
                <TwixtUserStackList items={userStackList} />
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
