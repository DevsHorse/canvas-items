export const loadImage = (
  url: Url,
  callback: (image: HTMLImageElement | null) => void
) => {
  if (!url) {
    callback(null);
    return;
  }

  const img = new Image();
  img.onload = () => callback(img);
  img.src = url;
};
