import React from 'react';

export default function ErrorText() {
  return (
    <div className="flex w-full flex-col items-center gap-[40px]">
      <strong className="font-bold">에러발생!</strong>
      <p>예상치못한 에러가 발생했습니다.</p>
      <p>잠시 후 다시 실행해주세요.</p>
    </div>
  );
}
