'use client';

import React from 'react';

interface Props {
  children: React.ReactNode;
}

export default function ServerWrapper({ children }: Props) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    setCount(20);
  }, []);

  return (
    <div className="flex flex-col gap-12">
      {children}
      <p>{count}</p>
    </div>
  );
}
