import { createSlice } from '@reduxjs/toolkit';
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
        addList: (state, action) => {
            state.lists = [...state.lists, action.payload];
        }
    }
});

export const { addList } = listsSlice.actions;

export default listsSlice.reducer;
