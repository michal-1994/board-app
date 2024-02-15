import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LISTS } from './data';
import { IList } from './interfaces/IList';

export interface ListsState {
    lists: IList[];
}

const initialState: ListsState = {
    lists: LISTS
};

export const listsSlice = createSlice({
    name: 'lists',
    initialState,
    reducers: {
        addList: (state, action: PayloadAction<IList>) => {
            state.lists.push(action.payload);
        },
        changeList: (
            state,
            action: PayloadAction<{ listId: number; listTitle: string }>
        ) => {
            const { listId, listTitle } = action.payload;
            state.lists[listId] = { ...state.lists[listId], title: listTitle };
        },
        removeList: (state, action: PayloadAction<{ listId: number }>) => {
            state.lists.splice(action.payload.listId, 1);
        },
        addItem: (
            state,
            action: PayloadAction<{ listId: number; itemText: string }>
        ) => {
            state.lists[action.payload.listId].items.push({
                text: action.payload.itemText
            });
        },
        changeItem: (
            state,
            action: PayloadAction<{
                listId: number;
                itemId: number;
                itemText: string;
            }>
        ) => {
            const { listId, itemId, itemText } = action.payload;
            state.lists[listId].items[itemId].text = itemText;
        },
        removeItem: (
            state,
            action: PayloadAction<{ listId: number; itemId: number }>
        ) => {
            state.lists[action.payload.listId].items.splice(
                action.payload.itemId,
                1
            );
        }
    }
});

export const {
    addList,
    changeList,
    removeList,
    addItem,
    changeItem,
    removeItem
} = listsSlice.actions;

export default listsSlice.reducer;
