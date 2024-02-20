import { configureStore } from '@reduxjs/toolkit';
import listsReducer from '../reducers/reducer';

export default configureStore({
    reducer: listsReducer
});
