import React from 'react';

interface Props {
  children: React.ReactNode;
}

export default function StepLayout({ children }: Props) {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex h-[50px] w-full items-center justify-center bg-slate-600 text-white">헤더</div>
      <div>{children}</div>
    </div>
  );
}
