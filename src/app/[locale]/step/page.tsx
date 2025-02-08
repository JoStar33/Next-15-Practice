import React from 'react';
import StepButton from '@/components/step/StepButton';

export default function StepPage() {
  return (
    <div className="flex w-[500px] flex-col gap-10">
      <p className="font-semibold text-black">절차를 진행해보세요.</p>
      <StepButton>스탭을 시작합니다.</StepButton>
    </div>
  );
}
