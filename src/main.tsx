import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import store from './state/store.ts';
import App from './App.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <DndProvider backend={HTML5Backend}>
                <App />
            </DndProvider>
        </Provider>
    </React.StrictMode>
);
