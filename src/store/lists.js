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
      const { listIndex, ...rest } = action.payload;
      const list = state.entities[listIndex];
      if (list) {
        list.items.push({
          ...rest,
        });
      }
    },
    removeListItem(state, action) {
      const { listIndex, listItemName } = action.payload;
      const list = state.entities[listIndex];
      if (list) {
        const listItemToBeRemovedIndex = list.items.findIndex(({ name }) => name === listItemName);
        if (listItemToBeRemovedIndex > -1) {
          list.items.splice(listItemToBeRemovedIndex, 1);
        }
      }
    }

  }
});

const { actions, reducer } = listsSlice;

export const { addList, removeList } = actions;

export default reducer;