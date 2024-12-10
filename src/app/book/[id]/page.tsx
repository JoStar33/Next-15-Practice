export default async function BookPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  // 단, 만약에 Page 정보를 use client로 작성했을경우에는 React.use를 통해 값을 활용해야함.
  return <div>{id}</div>;
}

// url이 중첩으로 쌓이게 보여주고 싶다면 [...id]의 형태로 작성하면 된다.
// >> 캐치 올 세그먼트
// ex) 1/2/3 등등
// [[...id]]는 존재하지 않는 정보까지도 충족함. (그러나 보통 쓸일은 없겠다.)
