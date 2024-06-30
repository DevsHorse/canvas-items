import { FC, ReactElement } from 'react';

type PropsType = {
  condition: boolean;
  trueSlot: ReactElement;
  falseSlot: ReactElement;
};

const Condition: FC<PropsType> = ({ condition, trueSlot, falseSlot }) => {
  return condition ? trueSlot : falseSlot;
};

export default Condition;
