import { BackgroundImage } from './BackgroundImage';
import { Renderable } from '@/shared/types/Renderable';

export class BackgroundImageRenderer implements Renderable {
  private _backgroundImage: BackgroundImage;

  constructor(backgroundImage: BackgroundImage) {
    this._backgroundImage = backgroundImage;
  }

  render(ctx: CanvasRenderingContext2D) {
    if (ctx == null) return;
    ctx.globalAlpha = 0.3;
    ctx.drawImage(
      this._backgroundImage.image,
      0,
      0,
      ctx.canvas.width,
      ctx.canvas.height
    );
    ctx.globalAlpha = 1;
  }
}
