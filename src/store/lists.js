import { createSlice } from "@reduxjs/toolkit";

const listsSlice = createSlice({
  name: 'lists',
  initialState: {
    lastIndex: 0,
    entities: {},
  },
  reducers: {
    addList(state, action) {
      state.entities[state.lastIndex] = { index: state.lastIndex, name: action.payload.name, items: [] };
      state.lastIndex++;
    },
    removeList(state, action) {
      delete state.entities[action.payload.index];
    },
    addListItem(state, action) {
      console.log(action);
      const { index, ...rest } = action.payload;
      if (state.entities[index]) {
        state.entities[index].items.push({
          ...rest,
        });
      }
    }
  }
});

const { actions, reducer } = listsSlice;

export const { addList, removeList } = actions;

export default reducer;