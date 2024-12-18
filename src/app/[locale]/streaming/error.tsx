'use client';

//app 라우터에서 쓸때에는 이렇게 navigation으로 useRouter를 가져와주셈.
import { useRouter } from 'next/navigation';
// 서버든 클라이언트든 이 컴포넌트로 대응을 해야하므로 클라이언트 컴포넌트로
// 설정해야함.
import React from 'react';

// 비동기 처리가 실패했을 경우는 loading과 같이 Error 컴포넌트의 내용이 노출됨.
export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  // 이렇게 에러메시지만 확인하는것 또한 가능함.
  const router = useRouter();
  React.useEffect(() => {
    console.log(error.message);
  }, [error]);

  return (
    <>
      {/**재호출을 위한 reset 함수 사용도 가능함. like ErrorBoundary */}
      {/**서버로부터 받은 컴포넌트를 다시 렌더링하는게 아니라, 클라이언트 컴포넌트 내부에서 생긴 이슈를 해결함. */}
      {/**이때에는 차라리 router.refresh()를 호출하는게 낫다. */}
      오류가 발생했습니다.
      <button
        onClick={() => {
          // 렌더링 작업들을 일괄적으로 동작시킨다.
          React.startTransition(() => {
            router.refresh(); // 현재 페이지에 필요한 서버컴포넌트들을 다시 가져온다.
            reset(); // 에러상태에 대한 초기화
          });
        }}
      >
        다시 시도
      </button>
    </>
  );
}
