import { AppBoard } from '../board/AppBoard';
import {
  CircleElement,
  createBackgroundImage,
  PointElement,
} from '@/entities/canvas';
import { CanvasItem, canvasItemUtils } from '@/entities/canvasItem';
import { Element } from '@/shared/model/Element';

export class AppBoardAdapter {
  private _board: AppBoard;

  constructor(board: AppBoard) {
    this._board = board;
  }

  get board() {
    return this._board;
  }

  setItems(items: CanvasItem[]) {
    const resultElements: Element[] = [];

    for (const item of items) {
      if (canvasItemUtils.guards.isPointItem(item)) {
        resultElements.push(new PointElement(item.id, item.x, item.y));
      }
      if (canvasItemUtils.guards.isCircleItem(item)) {
        resultElements.push(
          new CircleElement(item.id, item.x, item.y, item.radius)
        );
      }
    }

    this._board.setItems(resultElements);
  }

  setBackgroundImage(backgroundImageUrl: Url | null) {
    createBackgroundImage(backgroundImageUrl).then((image) => {
      this._board.setBackgroundImage(image);
    });
  }
}
