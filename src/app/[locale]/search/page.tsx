/**
{
  params: Promise {
    <pending>,
    [Symbol(async_id_symbol)]: 9143,
    [Symbol(trigger_async_id_symbol)]: 9142,
    [Symbol(kResourceStore)]: {
      isStaticGeneration: false,
      page: '/search/page',
      fallbackRouteParams: null,
      route: '/search',
      incrementalCache: [IncrementalCache],
      cacheLifeProfiles: [Object],
      isRevalidate: false,
      isPrerendering: undefined,
      fetchCache: undefined,
      isOnDemandRevalidate: false,
      isDraftMode: false,
      requestEndedState: [Object],
      isPrefetchRequest: false,
      buildId: 'development',
      reactLoadableManifest: {},
      assetPrefix: '',
      afterContext: undefined,
      fetchMetrics: []
    },
    [Symbol(kResourceStore)]: {
      type: 'request',
      phase: 'render',
      implicitTags: [Array],
      url: [Object],
      headers: [Getter],
      cookies: [Getter/Setter],
      mutableCookies: [Getter],
      userspaceMutableCookies: [Getter],
      draftMode: [Getter],
      renderResumeDataCache: null,
      devWarmupPrerenderResumeDataCache: null,
      isHmrRefresh: false,
      serverComponentsHmrCache: [LRUCache]
    },
    [Symbol(kResourceStore)]: undefined,
    [Symbol(kResourceStore)]: undefined,
    [Symbol(kResourceStore)]: undefined,
    [Symbol(kResourceStore)]: undefined
  },
  searchParams: Promise {
    <pending>,
    [Symbol(async_id_symbol)]: 9083,
    [Symbol(trigger_async_id_symbol)]: 9038,
    [Symbol(kResourceStore)]: {
      isStaticGeneration: false,
      page: '/search/page',
      fallbackRouteParams: null,
      route: '/search',
      incrementalCache: [IncrementalCache],
      cacheLifeProfiles: [Object],
      isRevalidate: false,
      isPrerendering: undefined,
      fetchCache: undefined,
      isOnDemandRevalidate: false,
      isDraftMode: false,
      requestEndedState: [Object],
      isPrefetchRequest: false,
      buildId: 'development',
      reactLoadableManifest: {},
      assetPrefix: '',
      afterContext: undefined,
      fetchMetrics: []
    },
    [Symbol(kResourceStore)]: {
      type: 'request',
      phase: 'render',
      implicitTags: [Array],
      url: [Object],
      headers: [Getter],
      cookies: [Getter/Setter],
      mutableCookies: [Getter],
      userspaceMutableCookies: [Getter],
      draftMode: [Getter],
      renderResumeDataCache: null,
      devWarmupPrerenderResumeDataCache: null,
      isHmrRefresh: false,
      serverComponentsHmrCache: [LRUCache]
    },
    [Symbol(kResourceStore)]: undefined,
    [Symbol(kResourceStore)]: undefined,
    [Symbol(kResourceStore)]: undefined,
    [Symbol(kResourceStore)]: undefined
  }
}
 */
export default async function SearchPage(props: { searchParams: Promise<{ q: string }> }) {
  const { searchParams } = props;
  // 자, 이렇게 searchParams or 쿠키 or params or headers를 사용할때는 앞으로 앞에 await을 써야함.
  // 비동기가 됐음.
  const { q } = await searchParams;
  console.log(q);
  return <>{q}</>;
}
