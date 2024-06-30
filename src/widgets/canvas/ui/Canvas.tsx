import { useEffect, useRef, useState } from 'react';
import { AppBoardAdapter } from '../model';
import { AppBoard } from '../model/board/AppBoard';
import { canvasSelectors } from '@/entities/canvas';
import { canvasConfig } from '@/shared/config/canvasConfig';
import { useAppSelector } from '@/shared/hooks/reduxHooks';

const Canvas = () => {
  const [board, setBoard] = useState<AppBoard | null>(null);

  const { canvasItems, backgroundImageUrl } = useAppSelector(
    canvasSelectors.canvasState
  );

  const canvasNodeRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (canvasNodeRef.current) {
      const board = new AppBoard(canvasNodeRef.current);
      board.setSettings(canvasConfig.width, canvasConfig.height);
      setBoard(board);
    }
  }, []);

  useEffect(() => {
    if (board) {
      new AppBoardAdapter(board).setItems(canvasItems);
    }
  }, [canvasItems, board]);

  useEffect(() => {
    if (board) {
      new AppBoardAdapter(board).setBackgroundImage(backgroundImageUrl);
    }
  }, [backgroundImageUrl, board]);

  return <canvas className='w-full' ref={canvasNodeRef} />;
};

export default Canvas;
