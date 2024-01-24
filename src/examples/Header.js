import React, { useState } from 'react'
import { TwixtHeader, ToolName } from 'TwixtUI/react'

export default function Header() {
  return (
    <TwixtHeader headerClass="bg-blue-300" rightBlock={(
      <>Right</>
    )}>
      <ToolName name="Twixt UI React App" />
    </TwixtHeader>
  );
}