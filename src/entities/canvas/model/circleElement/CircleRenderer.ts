import { CircleElement } from './CircleElement';
import { Renderable } from '@/shared/types/Renderable';

export class CircleRenderer implements Renderable {
  private _element: CircleElement;

  constructor(circle: CircleElement) {
    this._element = circle;
  }

  render(ctx: CanvasRenderingContext2D) {
    if (ctx == null) return;
    ctx.beginPath();
    ctx.arc(
      this._element.centerPoint.x,
      this._element.centerPoint.y,
      this._element.radius,
      0,
      Math.PI * 2,
      false
    );
    ctx.stroke();
  }
}
