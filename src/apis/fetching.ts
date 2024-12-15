// no-store는 캐시를 안하고 패싱함.
// 기본값입니다.
const response1 = await fetch('/api', { cache: 'no-store' });

// next revalidate
const response2 = await fetch('/api', { next: { revalidate: 1000 } });

// force-cache는 무조건 캐싱을 해버린다.
// 한번 호출된 이후에는 다시는 호출되지 않음
const response3 = await fetch('/api', { cache: 'force-cache' });

export { response1, response2, response3 };

// 근데 이렇게된다면 결국 React-Query의 Hydrate는 필요없어지는게 아닌가하는
// 생각도 하게됨.

/****************** Request 메모이제이션 ******************/
// 참고로 Next.js에서는 Request 메모이제이션이라는 기능이 존재함.
// 하나의 페이지내에서 중복된 API를 호출하면 이를 호출하지않고 모든
// 컴포넌트에서 사용하는 기능이다.

// 하나의 페이지를 렌더링 하는 동안에
// 중복된 API 요청을 캐싱하기 위해 존재함.
// 따라서 렌더링이 종료되면 모든 캐시가 소멸한다.
// 리퀘스트 메모이제이션과 데이터 캐시는 다름. 주의!

/********************   개인적인 생각   ********************/
// 서버 컴포넌트를 활용해야하는 상황이라면 fetch를 쓰고, 그게 아니라면
// 리액트 쿼리를 활용해 캐시를 하도록 만드는게 좋을듯.
