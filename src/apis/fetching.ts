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
