import { BackgroundImage } from '../model/backgroundImage/BackgroundImage';
import { utils } from '@/shared/util';

export const createBackgroundImage = (
  imageUrl: Url | null
): Promise<BackgroundImage | null> =>
  new Promise((resolve) => {
    utils.loadImage(imageUrl || '', (image) => {
      if (image) {
        resolve(new BackgroundImage(image));
      }
      resolve(null);
    });
  });
