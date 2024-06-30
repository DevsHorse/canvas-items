import { CanvasItem } from '@/entities/canvasItem';

export interface CanvasStateSchema {
  canvasItems: CanvasItem[];
  backgroundImageUrl: Url | null;
}
