import { notFound } from 'next/navigation';
import React from 'react';
import stepData from '@/datas/stepData';

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return [{ slug: '1' }, { slug: '2' }, { slug: '3' }];
}

export default async function StepIndividualPage({ params }: Props) {
  const { slug } = await params;

  const stepId = parseInt(slug);

  if (!slug || isNaN(stepId)) {
    return notFound();
  }

  const stepElement = stepData.find((element) => element.id === stepId);

  if (!stepElement) {
    return notFound();
  }

  return (
    <div className="flex flex-col gap-[20px]">
      <p>{stepElement?.title}</p>
      <p>{stepElement?.description}</p>
    </div>
  );
}
