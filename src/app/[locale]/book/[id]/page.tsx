// getStaticPaths의 역할을 수행하는 함수. 책이라는 데이터의 id목록을 불러온다.

import { notFound } from 'next/navigation';

// 이후 불러온 id정보를 토대로 상세페이지들을 빌드시점에 미리 생성해둔다.
export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
}

// 여기 이렇게 revalidate를 지정해 재생성을 시키도록 만들 수 있다.
export const revalidate = 60;

// 위에 generateStaticParams에 해당하는 id정보가 존재하지 않는다면, 전부 404페이지로 이동시킨다.
export const dynamicParams = false;

export default async function BookPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  if (!id) {
    // notFound함수를 사용시에 404 페이지로 이동된다.
    // 단, 지금 이 예제는 적합하진 못함. 보통 API 호출이후 에러코드가 404면 notFound를 호출하는게 맞겠다.
    return notFound();
  }

  // 단, 만약에 Page 정보를 use client로 작성했을경우에는 React.use를 통해 값을 활용해야함.
  return <div>{id}</div>;
}

// url이 중첩으로 쌓이게 보여주고 싶다면 [...id]의 형태로 작성하면 된다.
// >> 캐치 올 세그먼트
// ex) 1/2/3 등등
// [[...id]]는 존재하지 않는 정보까지도 충족함. (그러나 보통 쓸일은 없겠다.)
