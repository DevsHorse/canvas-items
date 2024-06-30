import { FC, InputHTMLAttributes } from 'react';
import { Input } from '@/shared/ui/Input';

type PropsType = InputHTMLAttributes<HTMLInputElement>;

const FormInput: FC<PropsType> = ({ ...props }) => {
  return (
    <Input
      {...props}
      className='w-full disabled:bg-transparent disabled:border-transparent'
      onKeyDown={(e) =>
        ['e', 'E', '+', '-'].includes(e.key) && e.preventDefault()
      }
    />
  );
};

export default FormInput;
