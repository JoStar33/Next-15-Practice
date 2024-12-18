import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';
import { LanuguageType } from './type';

const localeArray: LanuguageType[] = ['en', 'ko'];

export const routing = defineRouting({
  locales: localeArray, // 지원 가능한 언어목록
  defaultLocale: 'ko', // 기본 언어
  pathnames: {
    '/': '/',
  },
});

export type Locale = (typeof routing.locales)[number];

export const { Link, getPathname, redirect, usePathname, useRouter } = createNavigation(routing);
