import { Renderable } from '../types/Renderable';

export abstract class Element {
  private _id: Id;
  abstract _renderer: Renderable;

  constructor(id: Id) {
    this._id = id;
  }

  get id() {
    return this._id;
  }

  get renderer() {
    return this._renderer;
  }
}
