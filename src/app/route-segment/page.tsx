import React from 'react';

// 페이지의 동작을(ISR or SSG로 강제화) 강제로 설정할 수 있는 옵션들이라고 생각하면 된다.

// 해당페이지를 강제로 스테틱 or 다이나믹으로 만듦.
// 1. auto: 기본값. 아무것도 강제하지 않음. 당연히 생략해도 됨.
// 2. force-dynamic: 페이지를 강제로 다이나믹 페이지로 설정함. (매순간마다 재생성됨) 빌드결과보면 진짜 다이나믹 페이지로 만들어짐.
// 3. force-static: 페이지를 강제로 스태틱 페이지로 설정함.
// 4. error: 페이지를 강제로 스태틱 페이지로 설정함. (스태틱으로 설정하면 안된다면 빌드 오류를 뱉음.)
export const dynamic = 'auto';

// 이때 SSR기반의 searchParams를 사용하는 페이지에서 force-static을 활용하면
// 검색이 제대로 동작하지 않는다.
// 다이나믹 기능은 사용이 권장되지 않음.

export default function Page() {
  return <>page</>;
}
