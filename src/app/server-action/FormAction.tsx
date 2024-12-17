'use client';

import React from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Form from '@/components/hookForm';
import { schema } from '@/utils/schema';
import { UserForm } from '@/types/users';
import submitForm from './serverAction';

export default function FormAction() {
  const methods = useForm<UserForm>({
    defaultValues: {
      name: '',
      age: 0,
      gender: 'FEMALE',
    },
    resolver: yupResolver(schema.userSchema),
  });

  const handleActionSubmit: SubmitHandler<UserForm> = async (submitData) => {
    await submitForm(submitData);
  };

  /**
   * action도 좋긴한데... action과 react-hook-form과의 연동이 안됨.
   * 따라서 아쉽지만 onSubmit을 통한 등록을 유도하되, 실행자체는 서버함수로 실행되도록 만들면 될듯.
   * 일단 서버측에서 실행하게 하는 방식자체의 장점은 어느정도 동의. (보안상에 강점)
   * 그러나 react-hook-form과 같은 라이브러리를 통해, 체계적인 유효성검사 및 간편한 상태관리를 두고 굳이 서버액션만 사용해야하느냐는 의문.
   * 따라서 이둘을 조합하여, 폼상태관리 및 유효성 검사를 하는것은 리액트 푹폼에 맡기고, 백엔드 서버에 데이터를 전달하는건 서버액션함수에 맡기는게 좋을듯.
   * 아니면 아예 서버액션 함수에서 DB접근을 해도 괜찮고.
   */
  return (
    <FormProvider {...methods}>
      <form className="flex flex-col gap-[10px]" onSubmit={methods.handleSubmit(handleActionSubmit)}>
        <Form.Input<UserForm> name="name" />
        <Form.Input<UserForm> name="age" />
        <div className="flex gap-[5px]">
          <Form.RadioButton<UserForm> name="gender" value="MALE">
            남
          </Form.RadioButton>
          <Form.RadioButton<UserForm> name="gender" value="FEMALE">
            여
          </Form.RadioButton>
        </div>
        <button type="submit">등록</button>
      </form>
    </FormProvider>
  );
}
