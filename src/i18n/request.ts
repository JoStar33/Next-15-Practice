import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { routing } from './routing';
import { LanuguageType } from './type';

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale;
  if (!routing.locales.includes(locale as LanuguageType)) notFound();

  return {
    locale,
    messages: (await import(`@/i18n/messages/${locale}.json`)).default,
  };
});
