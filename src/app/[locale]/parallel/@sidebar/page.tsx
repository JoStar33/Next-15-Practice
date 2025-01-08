import React from 'react';

export default function Page() {
  const list = ['첫번째', '두번째', '세번째', '네번째'];
  return (
    <ul className="flex w-[300px] flex-col gap-[10px]">
      {list.map((element, index) => (
        <li key={index}>{element}</li>
      ))}
    </ul>
  );
}
