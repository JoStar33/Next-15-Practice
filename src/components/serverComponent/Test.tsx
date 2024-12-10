'use client';

import React from 'react';

type ButtonEvent = 'plus' | 'minus';

export default function Test() {
  const [number, setNumber] = React.useState(1);
  const handleClickButton = (type: ButtonEvent) => setNumber((prev) => (type === 'plus' ? prev + 1 : prev - 1));
  return (
    <div className="flex gap-6">
      <button
        className="flex w-20 items-center justify-center border-2 border-solid border-black"
        onClick={() => handleClickButton('plus')}
      >
        +
      </button>
      {number}
      <button
        className="flex w-20 items-center justify-center border-2 border-solid border-black"
        onClick={() => handleClickButton('minus')}
      >
        -
      </button>
    </div>
  );
}
