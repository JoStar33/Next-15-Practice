import React from 'react';
import Link from 'next/link';
import Test from '@/components/serverComponent/Test';
import ServerTest from '@/components/serverComponent/ServerTest';

export default function ServerComponentPage() {
  return (
    <>
      여긴 서버에서 렌더링 되는 영역입니다.
      <div className="flex text-orange-500">하이?</div>
      <Link href="/search">검색페이지 이동</Link>
      <Test what="뭐요" />
      <ServerTest />
    </>
  );
}

// 서버 컴포넌트
/**
 * 서버에서 모든 작업을 수행해서 사용자에게 화면을 전달.
 * 이렇게 하는이유는 자바스크립트 번들의 양을 줄이기 위함.
 */

// use client가 적용된 컴포넌트 (클라이언트 컴포넌트)
/**
 * 기존 page 라우터 방식처럼
 * 서버에서 렌더링을 하되, 하이드레이션을 거치는 작업을 하는 컴포넌트이다.
 *
 * 검색하는 UI와 같이 상태 및 클릭이벤트가 들어가는 컴포넌트가 이에 적합.
 */

/**
 * !!!주의사항
 * 1. 서버 컴포넌트에는 브라우저에서 실행될 코드가 포함되면 안된다.
 *  - 따라서 브라우저에서만 실행되는 라이브러리로 인해 에러가 발생할 수도 있다.
 * 2. 클라이언트 컴포넌트는 클라이언트에서만 실행되지 않는다.
 * 3. 클라이언트 컴포넌트에서 서버 컴포넌트를 import할 수 없다.
 *  - 오직 서버에서만 실행되기 때문이다.
 *  - 정말 그럼에도 불구하고 서버 컴포넌트를 클라이언트 컴포넌트에서 import해야겠다면 children을
 *    통해서 컴포넌트를 넣는것을 권장.
 * 4. 서버 컴포넌트에서 클라이언트 컴포넌트에게 직렬화 되지 않는 props는 전달 불가능하다.
 *  - 이건 이미 알겠지만, JSON형태로 만들어줘야 한다는거임.
 *  - 함수는 직렬화가 불가능하기 때문에 props로 전달이 불가능하다. 주의할것.
 */

/**
 * RSC페이로드란?
 * 직렬화된 텍스트로 서버컴포넌트의 정보를 전달하는 페이로드이다.
 * 참고로 RSC 페이로드는 캐싱됨.
 */
