import React from 'react';
import Link from 'next/link';
import { getUserList } from '@/apis/users';
import ErrorText from '@/components/common/error/ErrorText';
import routerPath from '@/constants/routerPath';

export default async function UserList() {
  // 이 일련의 정보를 서버측에서 렌더링함.
  const userListResponse = await getUserList();

  // 이렇게 서버 컴포넌트에서 발생하는 예외화면을 보여줌.
  if (!userListResponse) {
    return <ErrorText />;
  }

  return (
    <div className="mt-20 flex w-[620px] flex-col gap-5">
      {userListResponse.map((userListElement) => (
        <div className="flex h-10 items-center justify-between border-2 border-solid border-orange-500 pl-10" key={userListElement.id}>
          <div className="">
            <span className="w-[100px]">{userListElement.name}</span>
            {userListElement.email}
          </div>
          <Link className="w-[50px] bg-slate-500 p-2" href={`${routerPath.USER}/${userListElement.id}`}>
            이동
          </Link>
        </div>
      ))}
    </div>
  );
}
