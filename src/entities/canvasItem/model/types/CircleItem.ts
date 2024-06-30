import { CanvasItem } from './CanvasItem';
import { CanvasItemType } from './CanvasItemType';

export type CircleItem = Omit<CanvasItem, 'type'> & {
  type: CanvasItemType.CIRCLE;
  x: number;
  y: number;
  radius: number;
};
