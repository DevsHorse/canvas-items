import { ReactElement, useState } from 'react';
import { FieldValues, SubmitHandler, useFormContext } from 'react-hook-form';
import { Button } from '@/shared/ui/Button';
import { Condition } from '@/shared/ui/Condition';
import { utils } from '@/shared/util';

type PropsType<T extends FieldValues> = {
  onSave: SubmitHandler<T>;
  onDelete: () => void;
  fieldsSlot: (isEdit: boolean) => ReactElement;
};

function Form<T extends FieldValues>({
  onSave,
  onDelete,
  fieldsSlot,
}: PropsType<T>) {
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const { handleSubmit } = useFormContext<T>();

  return (
    <form
      className='flex sm:justify-between sm:items-end gap-10 max-sm:flex-col max-sm:gap-4'
      onSubmit={handleSubmit((data) => {
        onSave(data);
        setIsEdit(false);
      })}
    >
      <div className='flex flex-col gap-3 grow'>{fieldsSlot(isEdit)}</div>
      <div className='flex items-center gap-5'>
        <Condition
          condition={isEdit}
          trueSlot={
            <Button
              className='border-green-200 hover:border-green-400 max-sm:w-full'
              type='submit'
            >
              Save
            </Button>
          }
          falseSlot={
            <Button
              type='button'
              className='border-blue-200 hover:border-blue-400 max-sm:w-full'
              onClick={utils.withPreventDefault(() => setIsEdit(true))}
            >
              Edit
            </Button>
          }
        />
        <Button
          type='button'
          className='border-red-200 hover:border-red-400'
          onClick={utils.withPreventDefault(() => onDelete())}
        >
          Delete
        </Button>
      </div>
    </form>
  );
}

export default Form;
