import { FC } from 'react';

type PropsType = {
  errorMessage?: string;
};

const FieldErrorMessage: FC<PropsType> = ({ errorMessage }) => {
  if (!errorMessage) return null;

  return <div className={'text-xs text-red-500'}>{errorMessage}</div>;
};

export default FieldErrorMessage;
