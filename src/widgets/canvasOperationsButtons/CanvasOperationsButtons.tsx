import { useCallback, useRef } from 'react';
import { canvasActions, canvasSelectors } from '@/entities/canvas';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/reduxHooks';
import { Button } from '@/shared/ui/Button';
import { HiddenImageFileInput } from '@/shared/ui/HiddenImageFileInput';

const CanvasOperationsButtons = () => {
  const dispatch = useAppDispatch();
  const backgroundImageUrl = useAppSelector(canvasSelectors.backgroundImageUrl);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const onCreatePoint = useCallback(() => {
    dispatch(canvasActions.createPointItem());
  }, [dispatch]);

  const onCreateCircle = useCallback(() => {
    dispatch(canvasActions.createCircleItem());
  }, [dispatch]);

  const onClickUploadButton = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

  const onUploadImage = useCallback(
    (imageUrl: Url) => {
      dispatch(canvasActions.setBackgroundImageUrl(imageUrl));
    },
    [dispatch]
  );

  const onClearImage = useCallback(() => {
    dispatch(canvasActions.clearBackgroundImageUrl());
  }, [dispatch]);

  return (
    <div className='flex gap-4 items-center justify-between max-md:flex-wrap'>
      <div className='flex items-center gap-4 max-md:w-full max-md:flex-wrap'>
        <Button className='max-md:w-full' onClick={onCreatePoint}>
          Create Point
        </Button>
        <Button className='max-md:w-full' onClick={onCreateCircle}>
          Create Circle
        </Button>
      </div>

      <div className='flex items-center gap-4 max-md:w-full max-md:flex-wrap'>
        <div className='relative cursor-pointer w-fit max-md:w-full'>
          <Button className='z-10 max-md:w-full' onClick={onClickUploadButton}>
            {backgroundImageUrl ? 'Replace' : 'Add'} Image
          </Button>
          <HiddenImageFileInput ref={fileInputRef} onInput={onUploadImage} />
        </div>

        {backgroundImageUrl && (
          <Button
            className='border-red-200 hover:border-red-400 max-md:w-full'
            onClick={onClearImage}
          >
            Clear image
          </Button>
        )}
      </div>
    </div>
  );
};

export default CanvasOperationsButtons;
