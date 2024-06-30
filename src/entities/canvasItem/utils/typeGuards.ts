import { CanvasItem, CanvasItemType, CircleItem, PointItem } from '../model';

const isPointItem = (item: CanvasItem): item is PointItem => {
  return item.type === CanvasItemType.POINT;
};

const isCircleItem = (item: CanvasItem): item is CircleItem => {
  return item.type === CanvasItemType.CIRCLE;
};

export const guards = {
  isPointItem,
  isCircleItem,
};
