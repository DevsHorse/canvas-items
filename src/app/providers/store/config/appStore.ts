import { configureStore } from '@reduxjs/toolkit';
import { canvasReducer } from '@/entities/canvas';

const createStore = () => {
  return configureStore({
    reducer: { canvas: canvasReducer },
  });
};

export const appStore = createStore();
export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
