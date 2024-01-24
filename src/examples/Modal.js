import React from 'react'
import { TwixtModal } from 'TwixtUI/react'

export default function Modal({ onSubmit = () => { } }) {
  return (
    <TwixtModal title="Modal Title"
      footer={(
        <button onClick={() => {
          onSubmit();
        }} className="px-3 py-1 bg-indigo-500 text-white rounded-md w-full sm:w-auto">
          Accept
        </button>
      )}
    >
      <p>This is the content of the modal. You can add any content here. Lorem ipsum dolor sit amet</p>
    </TwixtModal>
  );
}