import { CanvasItemType, PointItem } from '../../model';
import { PointSettings } from './types/PointSettings';
import { utils } from '@/shared/util';

export const createPointItem = (settings: PointSettings): PointItem => {
  return {
    id: utils.randomId(),
    type: CanvasItemType.POINT,
    x: settings.x,
    y: settings.y,
  };
};
