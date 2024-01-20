import React, { useState } from 'react'

export function Header({ appName = 'App' }) {
  return (
    <header class="flex justify-between items-center bg-blue-300 p-4">
      <div class="flex">Left</div>
      <div class="flex">Right</div>
    </header>
  );
}

export function LeftSideBar() {
  return (
    <nav class="flex w-72 h-full bg-pink-500">
      <div class="w-full flex mx-auto px-6 py-8">
        <div class="w-full h-full flex items-center justify-center text-gray-900 text-xl border-4 border-gray-900 border-dashed">Sidebar</div>
      </div>
    </nav>
  );
}

export function RightSideBar() {
  return (
    <nav class="flex w-72 h-full bg-yellow-400">
      <div class="w-full flex mx-auto px-6 py-8">
        <div class="w-full h-full flex items-center justify-center text-gray-900 text-xl border-4 border-gray-900 border-dashed">Rightbar</div>
      </div>
    </nav>
  );
}

export function ContentPane() {
  return (
    <main class="flex flex-col w-full bg-white overflow-x-hidden overflow-y-auto mb-14">
      <div class="flex w-full mx-auto px-6 py-8">
        <div class="flex flex-col w-full h-full text-gray-900 text-xl border-4 border-gray-900 border-dashed">
          <div class="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-green-400 border-b border-gray-600">Post</div>
          <div class="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-green-400 border-b border-gray-600">Post</div>
          <div class="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-green-400 border-b border-gray-600">Post</div>
          <div class="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-green-400 border-b border-gray-600">Post</div>
          <div class="flex w-full max-w-xl h-60 items-center justify-center mx-auto bg-green-400 border-b border-gray-600">Post</div>
        </div>
      </div>
    </main>
  );
}