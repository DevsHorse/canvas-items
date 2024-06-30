import { FC, PropsWithChildren } from 'react';
import cs from 'classnames';
import { CanvasItem, CanvasItemType } from '../../model';

const colors = {
  [CanvasItemType.POINT]: 'text-teal-500',
  [CanvasItemType.CIRCLE]: 'text-indigo-500',
};

type PropsType = {
  item: CanvasItem;
} & PropsWithChildren;

const CanvasItemCard: FC<PropsType> = ({ item, children }) => {
  return (
    <div className='flex flex-col gap-2 py-3 px-5 border border-gray-300 hover:border-gray-400 rounded-xl'>
      <div className='flex justify-between text-lg font-bold w-full'>
        <div>ID: {item.id}</div>
        <div className={cs('capitalize', colors[item.type])}>{item.type}</div>
      </div>
      {children}
    </div>
  );
};

export default CanvasItemCard;
