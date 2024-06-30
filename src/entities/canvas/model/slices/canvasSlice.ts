import { createSlice } from '@reduxjs/toolkit';
import { PayloadAction } from '@reduxjs/toolkit/react';
import { CanvasStateSchema } from '../types/CanvasStateSchema';
import {
  CanvasItem,
  canvasItemCreators,
} from '@/entities/canvasItem/@x/canvas';

const initialState: CanvasStateSchema = {
  canvasItems: [],
  backgroundImageUrl: null,
};

const canvasSlice = createSlice({
  name: 'canvasSlice',
  initialState: initialState,
  reducers: {
    createPointItem: (state) => {
      state.canvasItems.unshift(
        canvasItemCreators.createPointItem({ x: 0, y: 0 })
      );
    },
    createCircleItem: (state) => {
      state.canvasItems.unshift(
        canvasItemCreators.createCircleItem({ x: 0, y: 0, radius: 20 })
      );
    },
    updateCanvasItem: (state, action: PayloadAction<CanvasItem>) => {
      const newItem = action.payload;
      state.canvasItems = state.canvasItems.map((stateItem) =>
        stateItem.id === newItem.id ? newItem : stateItem
      );
    },
    deleteCanvasItem: (state, action: PayloadAction<Id>) => {
      const id = action.payload;
      state.canvasItems = state.canvasItems.filter(
        (stateItem) => stateItem.id !== id
      );
    },
    setBackgroundImageUrl: (state, action: PayloadAction<Url>) => {
      state.backgroundImageUrl = action.payload;
    },
    clearBackgroundImageUrl: (state) => {
      state.backgroundImageUrl = null;
    },
  },
});

export const { reducer: canvasReducer, actions: canvasActions } = canvasSlice;
