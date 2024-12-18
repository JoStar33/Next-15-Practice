import React from 'react';
import delay from '@/utils/delay';

// Next.js는 자체적으로 스트리밍 방식의 렌더링을 지원중이다.
// 빠르게 사용자에게 보여줘도 되는 영역들은 빠르게 보내주고, 그외에 서버에서 느리게 렌더링된후에
// 전달되는 영역에는 fallback UI를 노출함.
// 스트리밍을 적용하면 사용자에게 뭐라도 빠르게 보여주는게 좋다.
// 스트리밍 방식은 보통 Dynamic Page에서 활용된다.

// 식당으로 비유하자면 식당고객에게 메인메뉴가 나오기전에 밑반찬이라도 주는거임.

// 페이지 컴포넌트의 스트리밍 로딩을 보여줄때에는 loading.tsx파일의 내용이 노출된다.

export default async function Page() {
  await delay(1500);
  return <>page</>;
}
