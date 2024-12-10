import Link from 'next/link';
import React from 'react';

export default function Page() {
  return (
    <>
      <Link href={'/'}>하이</Link>
    </>
  );
}

/**
 * app Router에서는 RSC Payload도 같이 포함해서 전달해주게 된다.
 */
