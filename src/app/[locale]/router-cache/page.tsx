import React from 'react';

// 클라이언트 라우터 캐시란?
// RSC 페이로드중 몇몇 페이지들에 겹치는 컴포넌트들을 캐시한다.
// 페이지의 이동을 최적화해주는 방식이라고 생각하면 됨.
// 그러나, 새로고침을 하거나 아예 탭을 껐다가 키면 그땐 어쩔수없이 다시 중복된
// 컴포넌트들을 호출한다.

export default function Page() {
  return <>page</>;
}
