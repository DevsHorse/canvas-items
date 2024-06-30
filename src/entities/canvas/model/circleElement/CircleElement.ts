import { CircleRenderer } from './CircleRenderer';
import { Point } from '@/shared/model/Point';
import { Element } from '@/shared/model/Element';

export class CircleElement extends Element {
  private _centerPoint: Point;
  private _radius: number;
  readonly _renderer: CircleRenderer = new CircleRenderer(this);

  constructor(id: Id, x: number, y: number, radius: number) {
    super(id);
    this._centerPoint = new Point(x, y);
    this._radius = radius;
  }

  get centerPoint() {
    return this._centerPoint;
  }

  get radius() {
    return this._radius;
  }

  set(x: number, y: number, radius: number) {
    this._centerPoint.x = x;
    this._centerPoint.y = y;
    this._radius = radius;
    return this;
  }
}
