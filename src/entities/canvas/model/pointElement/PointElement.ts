import { PointRenderer } from './PointRenderer';
import { Point } from '@/shared/model/Point';
import { Element } from '@/shared/model/Element';

export class PointElement extends Element {
  private _point: Point;
  readonly _renderer: PointRenderer = new PointRenderer(this);

  constructor(id: Id, x: number, y: number) {
    super(id);
    this._point = new Point(x, y);
  }

  get point() {
    return this._point;
  }

  set(x: number, y: number) {
    this._point.x = x;
    this._point.y = y;
    return this;
  }
}
