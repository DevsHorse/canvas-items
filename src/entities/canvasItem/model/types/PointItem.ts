import { CanvasItem } from './CanvasItem';
import { CanvasItemType } from './CanvasItemType';

export type PointItem = Omit<CanvasItem, 'type'> & {
  type: CanvasItemType.POINT;
  x: number;
  y: number;
};
