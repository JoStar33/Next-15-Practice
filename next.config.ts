import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

// 15버전부터는 ts파일로 생성됨.
const nextConfig: NextConfig = {
  /* config options here */
  // 이렇게 logging fetches fullUrl을 true로 두면 모든 API통신기록이
  // next서버에서 로그로 남음.
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  // 아래 옵션은 Next.js 15.1버전부터 사용가능한 기능.
  // 403 or 401페이지에 대한 처리를 가능케함.
  experimental: {
    authInterrupts: true,
  },
};

export default withNextIntl(nextConfig);
