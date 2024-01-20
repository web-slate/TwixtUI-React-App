import React, { useState } from 'react'
import { ToolName } from 'TwixtUI/react'

function TwixHeader({ children }) {
  return (
    <header class="flex justify-between items-center bg-blue-300 p-4">
      <div class="flex">
        <button
          class="bg-slate-800 text-slate-100 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
        {children}
      </div>
      <div class="flex">Right</div>
    </header>
  );
}

export default function Header() {
  return (
    <TwixHeader>
      <ToolName name="Twix UI React App" />
    </TwixHeader>
  );
}