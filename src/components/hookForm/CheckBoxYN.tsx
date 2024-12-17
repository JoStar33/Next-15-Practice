import React from 'react';
import { FieldValues, Path, PathValue, useFormContext } from 'react-hook-form';
import ErrorText from '@/components/hookForm/ErrorText';

interface Props<T extends FieldValues> extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  name: Path<T>;
  children: React.ReactNode;
}

export default function CheckBoxYN<T extends FieldValues>({ children, name, ...rest }: Props<T>) {
  const {
    formState: { errors },
    setValue,
  } = useFormContext<T>();

  const handleChangeCheck = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(name, (event.currentTarget.checked ? 'Y' : 'N') as PathValue<T, Path<T>>);
  };

  return (
    <div>
      <label className="mb-[5px] flex">
        <input {...rest} type="checkbox" name={name} onChange={handleChangeCheck} />
        <span className="font-medium">{children}</span>
      </label>
      <ErrorText errors={errors} name={name} />
    </div>
  );
}
