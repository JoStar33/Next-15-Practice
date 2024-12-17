import React from 'react';
import { FieldValues, Path, useFormContext } from 'react-hook-form';
import ErrorText from '@/components/hookForm/ErrorText';

interface Props<T extends FieldValues> extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  name: Path<T>;
  label?: string;
}

export default function Input<T extends FieldValues>({ name, label, ...rest }: Props<T>) {
  const {
    formState: { errors },
    register,
  } = useFormContext<T>();
  return (
    <div className="flex flex-col gap-[5px]">
      <span className="text-[15px] font-medium">{label}</span>
      <input className="border border-blue-950" {...rest} {...register(name)} />
      <ErrorText name={name} errors={errors} />
    </div>
  );
}
