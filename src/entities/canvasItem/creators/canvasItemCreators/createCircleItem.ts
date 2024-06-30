import { CanvasItemType, CircleItem } from '../../model';
import { CircleSettings } from './types/CircleSettings';
import { utils } from '@/shared/util';

export const createCircleItem = (settings: CircleSettings): CircleItem => {
  return {
    id: utils.randomId(),
    type: CanvasItemType.CIRCLE,
    x: settings.x,
    y: settings.y,
    radius: settings.radius,
  };
};
