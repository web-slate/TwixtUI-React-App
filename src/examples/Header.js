import React from 'react'
import { TwixtHeader, TwixtToolName } from 'TwixtUI/react'

export default function Header({ onHamburgerClick }) {
  const announceMent = {
    title: 'title',
    desc: 'desc goes here',
  };

  return (
    <TwixtHeader announcment={announceMent} headerClass="bg-blue-300" rightBlock={(
      <>Right</>
    )} onHamburgerClick={onHamburgerClick}>
      <TwixtToolName name="Twixt UI React App" />
    </TwixtHeader>
  );
}