// eslint-disable-next-line @typescript-eslint/no-unused-expressions
'use server';

import { UserForm } from '@/types/users';

// { formData: { gender: 'MALE', age: 0, name: 'Jostar' } }
// POST /server-action 200 in 1203ms
// next action에 대한 해쉬값도 남게된다.
// 근데 왜 굳이 서버액션을 왜 쓰는걸까?

// 코드가 간결해진다. 그리고 서버측에서만 실행되기때문에 보안적인 측면에서 좋음.
// 이런 활용을 해볼 수 있겠다. submit을 하는 API를 가리고, API에 전달하는 데이터 자체는 암호화를 안하고
// 클라이언트에서 암호화된 정보를 서버액션함수에서 복호화하면 될듯?
const submitForm = async (formData: UserForm) => {
  try {
    // fake a delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log({ formData });

    return {
      errors: null,
      data: 'data received and mutated',
    };
  } catch (error: unknown) {
    return {
      errors: {
        error,
        message: 'An unexpected error occurred. Could not create shelf.',
      },
      data: null,
    };
  }
};

export default submitForm;
