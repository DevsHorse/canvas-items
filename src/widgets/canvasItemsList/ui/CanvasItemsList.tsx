import React from 'react';
import { useCallback } from 'react';
import {
  EditCircleItemForm,
  EditPointItemForm,
} from '@/features/editCanvasItem';
import { canvasSelectors } from '@/entities/canvas';
import {
  CanvasItem,
  CanvasItemCard,
  canvasItemUtils,
} from '@/entities/canvasItem';
import { useAppSelector } from '@/shared/hooks/reduxHooks';

const CanvasItemsList = () => {
  const canvasItems = useAppSelector(canvasSelectors.canvasItems);

  const renderComponent = useCallback((canvasItem: CanvasItem) => {
    let form = null;

    if (canvasItemUtils.guards.isPointItem(canvasItem)) {
      form = <EditPointItemForm item={canvasItem} />;
    }
    if (canvasItemUtils.guards.isCircleItem(canvasItem)) {
      form = <EditCircleItemForm item={canvasItem} />;
    }

    return <CanvasItemCard item={canvasItem}>{form}</CanvasItemCard>;
  }, []);

  return (
    <div className='flex flex-col gap-3'>
      {canvasItems.map((item) => (
        <React.Fragment key={item.id}>{renderComponent(item)}</React.Fragment>
      ))}
    </div>
  );
};

export default CanvasItemsList;
