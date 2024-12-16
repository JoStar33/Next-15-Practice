import React from 'react';

// 1.5초간 로딩이 노출된다.
// 주의할점은 이 로딩컴포넌트는 해당하는 컴포넌트 아래에 해당하는 다른 페이지까지도 영향을 줄 수 있는 컴포넌트이다.
// 따라서 영향을 안줘도 괜찮은지 고려를 충분히 해야함.

export default function Loading() {
  return <>Loading...</>;
}
