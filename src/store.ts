import { configureStore } from '@reduxjs/toolkit';
import listsReducer from './reducer';

export default configureStore({
    reducer: {
        lists: listsReducer
    }
});
