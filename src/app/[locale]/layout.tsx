import React from 'react';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';
import { routing } from '@/i18n/routing';
import { LanuguageType } from '@/i18n/type';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// 모든 페이지에 다 적용되는 루트페이지 (필수적으로 존재해야함.)
export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: LanuguageType }>;
}>) {
  const { locale } = await params;
  const messages = await getMessages();
  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
