import { CanvasBoard } from './CanvasBoard';
import { BackgroundImage } from '@/entities/canvas';
import { Element } from '@/shared/model/Element';

export class AppBoard extends CanvasBoard {
  private _items: Element[] = [];
  private _backgroundImage: BackgroundImage | null = null;

  get items() {
    return this._items;
  }

  setItems(items: Element[]) {
    this._items = items;
    this.render();
  }

  setBackgroundImage(backgroundImage: BackgroundImage | null) {
    this._backgroundImage = backgroundImage;
    this.render();
  }

  render() {
    if (!this.ctx) return;
    this.clear();

    if (this._backgroundImage) {
      this._backgroundImage.renderer.render(this.ctx);
    }

    for (const item of this._items) {
      item.renderer.render(this.ctx);
    }
  }
}
