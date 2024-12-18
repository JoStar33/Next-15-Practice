import { getTranslations, setRequestLocale } from 'next-intl/server';
import React from 'react';
// import { useTranslations } from 'next-intl';
import { LanuguageType } from '@/i18n/type';

export default async function Page({ params }: { params: Promise<{ locale: LanuguageType }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  // 클라이언트에서 사용시에는 아래와 같은 훅을 사용한다.
  // const {} = useTranslations();

  // 다만, 지금은 서버에서 동작하는 번역이기때문에 아래 함수를 사용한다.
  const t = await getTranslations();

  /**
   * 정리해보자면,
   *
   * 서버에서의 번역실행 >> getTranslations
   * 클라이언트에서의 번역실행 >> useTranslations
   *
   * https://next-intl.dev/docs/environments/server-client-components
   */
  return <>{t('Home.title')}</>;
}
