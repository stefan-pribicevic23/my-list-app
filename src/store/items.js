import { createSlice } from '@reduxjs/toolkit';

const itemsSlice = createSlice({
  name: 'items',
  initialState: [],
  reducers: {
    addItem(state, action) {
      state.push(action.payload.item);
    },
    removeItem(state, action) {
      const removeItemIndex = state.indexOf(action.item);
      if (removeItemIndex > -1) {
        state.splice(removeItemIndex, 1);
      }
    }
  }
});

const { actions, reducer } = itemsSlice;

export const { addItem, removeItem } = actions;

export default reducer;