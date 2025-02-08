import { notFound } from 'next/navigation';
import React from 'react';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return [{ slug: '1' }, { slug: '2' }, { slug: '3' }];
}

export default async function StepIndividualPage({ params }: Props) {
  const { slug } = await params;

  if (!slug) {
    return notFound();
  }

  return <div>{slug}</div>;
}
