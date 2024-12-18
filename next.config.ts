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
};

export default withNextIntl(nextConfig);
