'use client';

import { useSearchParams } from 'next/navigation';
import React from 'react';

// 이 컴포넌트의 문제는, dev로 실행했을 경우에는 문제가 발생하지않지만,
// 빌드시점에서는 searchParams의 값을 알 수 없기 때문에 문제가 발생한다.
// 따라서 이 컴포넌트를 사용시에는 클라이언트 사이드에서만 동작하도록 컴포넌트를 변경시켜줄
// 필요가 있다.
export default function SearchBar() {
  // next app 라우터에서는 searchParams를 가져올때 비동기적으로 가져온다.
  const searchParams = useSearchParams();
  const search = searchParams.get('search');
  const [searchState, setSearchState] = React.useState(() => search || '');

  const handleChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchState(event.currentTarget.value);
  };

  return (
    <div className="flex gap-[20px]">
      <label htmlFor="search-input">
        <span className="text-lg">검색어: </span>
        <input className="border-emerald-400" type="text" id="search-input" value={searchState} onChange={handleChangeInput} />
      </label>
      <button className="bg-orange-300 font-bold text-black">검색</button>
    </div>
  );
}
