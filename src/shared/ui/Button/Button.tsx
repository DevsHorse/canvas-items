import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';
import cs from 'classnames';

type PropsType = ButtonHTMLAttributes<HTMLButtonElement> & PropsWithChildren;

const Button: FC<PropsType> = ({ className, children, ...props }) => {
  return (
    <button
      className={cs(
        twMerge(
          'py-2 px-5 border-2 border-gray-200 hover:border-gray-400 rounded-md cursor-pointer text-sm capitalize font-semibold',
          className
        )
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
