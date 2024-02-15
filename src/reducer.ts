import { createSlice } from '@reduxjs/toolkit';
import { LISTS } from './data';
import { IList } from './interfaces/IList';
import { IItem } from './interfaces/IItem';

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
        addList: (state, action) => {
            state.lists = [...state.lists, action.payload];
        },
        changeList: (state, action) => {
            const newLists = state.lists.map((list, index) => {
                if (action.payload.listId === index) {
                    return {
                        ...list,
                        title: action.payload.listTitle
                    };
                }
                return list;
            });
            state.lists = newLists;
        },
        removeList: (state, action) => {
            const newLists = state.lists.filter(
                (list: IList, index: number) => action.payload.listId !== index
            );
            state.lists = newLists;
        },
        addItem: (state, action) => {
            const newLists = state.lists.map((list, index) => {
                if (action.payload.listId === index) {
                    return {
                        ...list,
                        items: [
                            ...state.lists[action.payload.listId].items,
                            { text: action.payload.itemText }
                        ]
                    };
                }
                return list;
            });
            state.lists = newLists;
        },
        changeItem: (state, action) => {
            const newItems = state.lists[action.payload.listId].items.map(
                (item: IItem, index: number) => {
                    if (action.payload.itemId === index) {
                        return {
                            text: action.payload.itemText
                        };
                    }
                    return item;
                }
            );
            const newLists = state.lists.map((list, index) => {
                if (action.payload.listId === index) {
                    return {
                        ...list,
                        items: newItems
                    };
                }
                return list;
            });
            state.lists = newLists;
        },
        removeItem: (state, action) => {
            const newItems = state.lists[action.payload.listId].items.filter(
                (item: IItem, index: number) => action.payload.itemId !== index
            );
            const newLists = state.lists.map((list, index) => {
                if (action.payload.listId === index) {
                    return {
                        ...list,
                        items: newItems
                    };
                }
                return list;
            });
            state.lists = newLists;
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
