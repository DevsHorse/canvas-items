import { Controller, FieldValues, Path, useFormContext } from 'react-hook-form';
import { FormInput } from '../FormInput';
import { FieldErrorMessage } from '@/shared/ui/FieldErrorMessage';
import { utils } from '@/shared/util';

type PropsType<T extends FieldValues> = {
  fieldName: Path<T>;
  label?: string;
  disabled?: boolean;
};

function NumberFormField<T extends FieldValues>({
  fieldName,
  label,
  disabled,
}: PropsType<T>) {
  const { control } = useFormContext();

  return (
    <Controller
      name={fieldName}
      control={control}
      render={({
        field: { value, name, onChange, onBlur },
        fieldState: { error },
      }) => (
        <div className='flex flex-col gap-1'>
          <div className='flex items-center gap-3'>
            <div className='font-bold'>{label}</div>
            <FormInput
              name={name}
              type='number'
              disabled={disabled}
              value={String(value)}
              onBlur={onBlur}
              onChange={(e) =>
                onChange(
                  Number(utils.removeLeadingZerosFromString(e.target.value))
                )
              }
            />
          </div>
          <FieldErrorMessage errorMessage={error?.message} />
        </div>
      )}
    />
  );
}

export default NumberFormField;
