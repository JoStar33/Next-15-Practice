'use client';

import { useRouter } from 'next/navigation';
import React from 'react';

interface Props {
  step?: number;
  children: React.ReactNode;
}

const FIRST_STEP = 1;

export default function StepButton({ step = 0, children }: Props) {
  const router = useRouter();
  const handleClick = () => {
    if (!step) {
      router.push(`/step/${FIRST_STEP}`);
      return;
    }
    router.push(`/step/${step}`);
  };

  return (
    <button className="flex cursor-pointer items-center justify-center bg-orange-400 text-pink-700" onClick={handleClick}>
      {children}
    </button>
  );
}
