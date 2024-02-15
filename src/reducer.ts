import { createSlice } from '@reduxjs/toolkit';
import { LISTS } from './data';

export const listsSlice = createSlice({
    name: 'counter',
    initialState: LISTS,
    reducers: {}
});

export default listsSlice.reducer;
