import { configureStore } from '@reduxjs/toolkit';
import listsReducer from './lists/reducer';

export default configureStore({
    reducer: listsReducer
});
