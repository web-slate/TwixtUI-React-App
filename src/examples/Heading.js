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
      <TwixtHeading type="h2">Heading 2 goes here</TwixtHeading>
      <TwixtHeading type="h3">Heading 3 goes here</TwixtHeading>
      <TwixtHeading type="h4">Heading 4 goes here</TwixtHeading>
      <TwixtHeading type="h5">Heading 5 goes here</TwixtHeading>
      <TwixtHeading type="h6">Heading 6 goes here</TwixtHeading>
    </div>
  );
}