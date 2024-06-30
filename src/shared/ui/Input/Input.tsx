import { FC, InputHTMLAttributes } from 'react';
import cs from 'classnames';
import { twMerge } from 'tailwind-merge';

type PropsType = InputHTMLAttributes<HTMLInputElement>;

const Input: FC<PropsType> = ({ className, ...props }) => {
  return (
    <input
      className={cs(
        twMerge('w-full border border-gray-300 rounded-md py-1 px-3', className)
      )}
      {...props}
    />
  );
};

export default Input;
