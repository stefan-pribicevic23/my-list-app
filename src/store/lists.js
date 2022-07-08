import { createSlice } from "@reduxjs/toolkit";

const getItemIndex = (list, listItemName) => {
  if (list) {
    return list.items.findIndex(({ name }) => name === listItemName);
  }

  return -1;
}

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
          checked: false,
        });
      }
    },
    removeListItem(state, action) {
      const { listIndex, listItemName } = action.payload;
      const list = state.entities[listIndex];
      const listItemIndex = getItemIndex(list, listItemName);

      if (listItemIndex > -1) {
        list.items.splice(listItemIndex, 1);
      }
    },
    toggleListItem(state, action) {
      const { listIndex, listItemName } = action.payload;
      const list = state.entities[listIndex];
      const listItemIndex = getItemIndex(list, listItemName);

      if (listItemIndex > -1) {
        list.items[listItemIndex].checked = !list.items[listItemIndex].checked;
      }
    }

  }
});

const { actions, reducer } = listsSlice;

export const { addList, removeList, addListItem, removeListItem, toggleListItem } = actions;

export default reducer;