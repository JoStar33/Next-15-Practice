'use client';

import React from 'react';

type ButtonEvent = 'plus' | 'minus';

interface Props {
  what: string;
}

export default function Test({ what }: Props) {
  const [number, setNumber] = React.useState(1);
  const handleClickButton = (type: ButtonEvent) => setNumber((prev) => (type === 'plus' ? prev + 1 : prev - 1));
  // 클라이언트 컴포넌트에서 서버컴포넌트를 import시에 에러발생!
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
      {what}
    </div>
  );
}
