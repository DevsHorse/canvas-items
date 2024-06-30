import { PointElement } from './PointElement';
import { Renderable } from '@/shared/types/Renderable';

export class PointRenderer implements Renderable {
  private _element: PointElement;

  constructor(point: PointElement) {
    this._element = point;
  }

  render(ctx: CanvasRenderingContext2D) {
    if (ctx == null) return;
    ctx.beginPath();
    ctx.arc(
      this._element.point.x,
      this._element.point.y,
      5,
      0,
      Math.PI * 2,
      false
    );
    ctx.fill();
    ctx.stroke();
  }
}
