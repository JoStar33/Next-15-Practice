import { ErrorMessage } from '@hookform/error-message';
import { FieldErrors, FieldValues } from 'react-hook-form';

interface IProps {
  name: string;
  errors: FieldErrors<FieldValues>;
  margin?: string;
}

export default function ErrorText({ name, errors }: IProps) {
  return (
    <div className="h-[15px] text-[12px] text-red-500">
      <ErrorMessage errors={errors} name={name} />
    </div>
  );
}
