import { BackgroundImageRenderer } from './BackgroundImageRenderer';

export class BackgroundImage {
  private _image: HTMLImageElement;
  private _renderer: BackgroundImageRenderer = new BackgroundImageRenderer(
    this
  );

  constructor(image: HTMLImageElement) {
    this._image = image;
  }

  get image() {
    return this._image;
  }

  get renderer() {
    return this._renderer;
  }
}
