'use client';

import React from 'react';

export default function Home() {
  const handleOnClickButton = () => alert('Elo');

  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      <h1>Hello world</h1>
      <p className='my-2'>Emil Kowalczyk</p>
      <p>Work in progress</p>
      <button
        onClick={handleOnClickButton}
        className='mt-2 border-1 px-4 py-2 rounded-[4px] hover:bg-black hover:text-white cursor-pointer transition'
      >
        Click me
      </button>
    </div>
  );
}
