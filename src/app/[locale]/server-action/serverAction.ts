// eslint-disable-next-line @typescript-eslint/no-unused-expressions
'use server';

import { revalidatePath, revalidateTag } from 'next/cache';
import { UserForm } from '@/types/users';
import { schema } from '@/utils/schema';

// { formData: { gender: 'MALE', age: 0, name: 'Jostar' } }
// POST /server-action 200 in 1203ms
// next action에 대한 해쉬값도 남게된다.
// 근데 왜 굳이 서버액션을 왜 쓰는걸까?

// 코드가 간결해진다. 그리고 서버측에서만 실행되기때문에 보안적인 측면에서 좋음.
// 이런 활용을 해볼 수 있겠다. submit을 하는 API를 가리고, API에 전달하는 데이터 자체는 암호화를 안하고
// 클라이언트에서 암호화된 정보를 서버액션함수에서 복호화하면 될듯?

const submitForm = async (_: any, formData: UserForm) => {
  try {
    // 서버측 유효성 검사 실시
    const validation = await schema.userSchema.validate(formData);
    if (!validation) {
      throw new Error('유효성 검사 실패');
    }

    // fake a delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // 해당페이지 재검증 (페이지 업데이트)
    /**
     * 페이지를 제거하고 다시 페이지를 생성한다.
     * 풀라우트 캐시와 데이터 캐시가 증발한다.
     */
    // revalidatePath 사용에는 몇가지 종류가 존재한다.
    // 이 방법은 주소에 해당하는 페이지의 재검증을 한다.
    revalidatePath('/server-action');
    // 이 방법은 경로의 모든 동적 페이지를 재검증을 한다.
    revalidatePath('/book/[id]', 'page');
    // 특정 레이아웃을 가지는 모든 페이지를 재검증을 한다.
    revalidatePath('/(NoLayout)', 'layout');
    // 모든 데이터를 재검증한다.
    revalidatePath('/', 'layout');
    // 이렇게 태그정보를 기반으로 재검증을 하는 방식도 있다. 이렇게 된다면 해당 태그정보를 기반으로 캐싱을 하고있는
    // 페이지를 재검증한다.
    const bookId = 12;
    revalidateTag(`book=${bookId}`);

    return {
      error: null,
      status: true,
      data: 'data received and mutated',
    };
  } catch (error: unknown) {
    return {
      error,
      status: false,
      data: null,
    };
  }
};

export default submitForm;
