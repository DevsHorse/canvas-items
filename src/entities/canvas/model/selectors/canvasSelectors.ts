const canvasState = (state: RootState) => state.canvas;
const canvasItems = (state: RootState) => state.canvas.canvasItems;
const backgroundImageUrl = (state: RootState) =>
  state.canvas.backgroundImageUrl;

export const canvasSelectors = {
  canvasState,
  canvasItems,
  backgroundImageUrl,
};
