import { createSlice } from "@reduxjs/toolkit";

const listsSlice = createSlice({
  name: 'lists',
  initialState: {
    lastIndex: 0,
    entities: {},
  },
  reducers: {
    addList(state, action) {
      state.entities[state.lastIndex] = { name: action.payload.name, items: [] };
      state.lastIndex++;
    }
  }
});

const { actions, reducer } = listsSlice;

export const { addList } = actions;

export default reducer;