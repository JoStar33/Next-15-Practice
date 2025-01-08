import React from 'react';

interface Props {
  children: React.ReactNode;
  sidebar: React.ReactNode;
  header: React.ReactNode;
}

export default function Layout({ sidebar, header, children }: Props) {
  return (
    <div className="flex flex-col">
      {header}
      <div className="flex">
        {sidebar}
        <div>{children}</div>
      </div>
    </div>
  );
}
