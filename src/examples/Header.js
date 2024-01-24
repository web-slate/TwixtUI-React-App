import React from 'react'
import { TwixtHeader, TwixtToolName } from 'TwixtUI/react'

export default function Header() {
  return (
    <TwixtHeader headerClass="bg-blue-300" rightBlock={(
      <>Right</>
    )}>
      <TwixtToolName name="Twixt UI React App" />
    </TwixtHeader>
  );
}