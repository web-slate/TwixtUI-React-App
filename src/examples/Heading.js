import React from 'react'
import { TwixtHeading } from 'TwixtUI/react'

export default function Heading() {
  const headingContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  };

  return (
    <div style={headingContainerStyle}>
      <TwixtHeading type="h1">Heading 1 goes here</TwixtHeading>
    </div>
  );
}