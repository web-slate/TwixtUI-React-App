import React from 'react'
import { TwixtModal, TwixtButton } from 'twixt-ui-react'

export default function Modal({ onSubmit = () => { } }) {
  return (
    <TwixtModal title="Modal Title"
      footer={(
        <TwixtButton onClick={() => {
          onSubmit();
        }} >
          Accept
        </TwixtButton>
      )}
    >
      <p>This is the content of the modal. You can add any content here. Lorem ipsum dolor sit amet</p>
    </TwixtModal>
  );
}