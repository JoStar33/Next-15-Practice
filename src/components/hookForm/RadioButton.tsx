import { FieldValues, Path, PathValue, useFormContext } from 'react-hook-form';

interface Props<T extends FieldValues> {
  name: Path<T>;
  style?: React.CSSProperties;
  inputStyle?: React.CSSProperties;
  value: PathValue<T, Path<T>>;
  disabled?: boolean;
  children?: React.ReactNode;
}

export default function RadioButton<T extends FieldValues>({ name, value, style, inputStyle, disabled, children }: Props<T>) {
  const { register } = useFormContext<T>();
  return (
    <label className="flex" htmlFor={`radio-${name}-${value}`} style={style}>
      <input style={inputStyle} value={value} id={`radio-${name}-${value}`} type="radio" disabled={disabled} {...register(name)} />
      {children}
    </label>
  );
}
