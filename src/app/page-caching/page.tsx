import React, { Suspense } from 'react';
import SearchBar from '@/components/pageCaching/SearchBar';

// 풀라우트 캐시는 정적으로 페이지를 미리 다 만들어두고 이 페이지를 요청시
// 페이지 정보를 그대로 보내주는 방식이다.
// SSG랑 비슷함.
// 스태틱 페이지에만 이런 방식이 적용됨.
// 대부분 페이지들을 이렇게 풀라우트 캐시의 형태로 만드는게 좋다.

/********* revalidate **********/
// 풀라우트 캐시도 리벨리데이트가 가능하다.
// ISR의 형태랑 유사하다고 보면 된다.

// app/dynamic-static/README.md 참고바람.
export default function Page() {
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <SearchBar />
      </Suspense>
      <div></div>
    </>
  );
}
