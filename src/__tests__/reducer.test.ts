import { configureStore } from '@reduxjs/toolkit';
import listsReducer, {
    ListsState,
    addItem,
    addList,
    changeItem,
    changeList,
    moveItem,
    moveItemToEmptyList,
    moveList,
    removeItem,
    removeList
} from '../state/lists/reducer';

const customInitialState: ListsState = {
    lists: [
        {
            title: 'Custom List 1',
            items: [{ text: 'Item 1' }, { text: 'Item 2' }]
        },
        {
            title: 'Custom List 2',
            items: [{ text: 'Item 1' }, { text: 'Item 2' }, { text: 'Item 3' }]
        },
        {
            title: 'Custom List 3',
            items: []
        }
    ]
};

let store = configureStore({
    reducer: listsReducer
});

describe('lists reducer', () => {
    beforeEach(() => {
        store = configureStore({
            reducer: listsReducer,
            preloadedState: customInitialState
        });
    });

    it('should handle initialList', () => {
        const state = store.getState() as ListsState;
        expect(state.lists).toHaveLength(3);
        expect(state.lists[0]).toEqual({
            title: 'Custom List 1',
            items: [{ text: 'Item 1' }, { text: 'Item 2' }]
        });
        expect(state.lists[1]).toEqual({
            title: 'Custom List 2',
            items: [{ text: 'Item 1' }, { text: 'Item 2' }, { text: 'Item 3' }]
        });
        expect(state.lists[2]).toEqual({
            title: 'Custom List 3',
            items: []
        });
    });

    it('should handle addList', () => {
        const newList = { title: 'New List', items: [] };
        const action = addList(newList);
        store.dispatch(action);

        const state = store.getState() as ListsState;
        expect(state.lists).toHaveLength(4);
        expect(state.lists[3]).toEqual(newList);
    });

    it('should handle changeList', () => {
        const action = changeList({
            listId: 0,
            title: 'Custom List 1 Changed'
        });
        store.dispatch(action);

        const state = store.getState() as ListsState;
        expect(state.lists).toHaveLength(3);
        expect(state.lists[0]).toEqual({
            title: 'Custom List 1 Changed',
            items: [{ text: 'Item 1' }, { text: 'Item 2' }]
        });
    });

    it('should handle removeList', () => {
        const action = removeList({ listId: 1 });
        store.dispatch(action);

        const state = store.getState() as ListsState;
        expect(state.lists).toHaveLength(2);
        expect(state.lists[1]).toEqual({
            title: 'Custom List 3',
            items: []
        });
    });

    it('should handle addItem', () => {
        const action = addItem({ listId: 0, text: 'New item' });
        store.dispatch(action);

        const state = store.getState() as ListsState;
        expect(state.lists[0].items).toHaveLength(3);
        expect(state.lists[0].items[2]).toEqual({ text: 'New item' });
    });

    it('should handle changeItem', () => {
        const action = changeItem({
            listId: 1,
            itemId: 2,
            text: 'Item 3 Changed'
        });
        store.dispatch(action);

        const state = store.getState() as ListsState;
        expect(state.lists[1].items).toHaveLength(3);
        expect(state.lists[1].items[2]).toEqual({ text: 'Item 3 Changed' });
    });

    it('should handle removeItem', () => {
        const action = removeItem({ listId: 1, itemId: 1 });
        store.dispatch(action);

        const state = store.getState() as ListsState;
        expect(state.lists[1].items).toHaveLength(2);
        expect(state.lists[1].items[1]).toEqual({ text: 'Item 3' });
    });

    it('should handle moveList the same place', () => {
        const action = moveList({ dragListIndex: 1, hoverListIndex: 1 });
        store.dispatch(action);

        const state = store.getState() as ListsState;
        expect(state.lists).toHaveLength(3);
        expect(state.lists[0]).toEqual({
            title: 'Custom List 1',
            items: [{ text: 'Item 1' }, { text: 'Item 2' }]
        });
        expect(state.lists[1]).toEqual({
            title: 'Custom List 2',
            items: [{ text: 'Item 1' }, { text: 'Item 2' }, { text: 'Item 3' }]
        });
        expect(state.lists[2]).toEqual({
            title: 'Custom List 3',
            items: []
        });
    });

    it('should handle moveList diffrent place', () => {
        const action = moveList({ dragListIndex: 1, hoverListIndex: 2 });
        store.dispatch(action);

        const state = store.getState() as ListsState;
        expect(state.lists).toHaveLength(3);
        expect(state.lists[0]).toEqual({
            title: 'Custom List 1',
            items: [{ text: 'Item 1' }, { text: 'Item 2' }]
        });
        expect(state.lists[1]).toEqual({
            title: 'Custom List 3',
            items: []
        });
        expect(state.lists[2]).toEqual({
            title: 'Custom List 2',
            items: [{ text: 'Item 1' }, { text: 'Item 2' }, { text: 'Item 3' }]
        });
    });

    it('should handle moveItem the same list', () => {
        const action = moveItem({
            dragListIndex: 0,
            dragItemIndex: 0,
            hoverListIndex: 0,
            hoverItemIndex: 1
        });
        store.dispatch(action);

        const state = store.getState() as ListsState;
        expect(state.lists).toHaveLength(3);
        expect(state.lists[0]).toEqual({
            title: 'Custom List 1',
            items: [{ text: 'Item 2' }, { text: 'Item 1' }]
        });
        expect(state.lists[1]).toEqual({
            title: 'Custom List 2',
            items: [{ text: 'Item 1' }, { text: 'Item 2' }, { text: 'Item 3' }]
        });
        expect(state.lists[2]).toEqual({
            title: 'Custom List 3',
            items: []
        });
    });

    it('should handle moveItem diffrent list', () => {
        const action = moveItem({
            dragListIndex: 0,
            dragItemIndex: 0,
            hoverListIndex: 1,
            hoverItemIndex: 2
        });
        store.dispatch(action);

        const state = store.getState() as ListsState;
        expect(state.lists).toHaveLength(3);
        expect(state.lists[0]).toEqual({
            title: 'Custom List 1',
            items: [{ text: 'Item 2' }]
        });
        expect(state.lists[1]).toEqual({
            title: 'Custom List 2',
            items: [
                { text: 'Item 1' },
                { text: 'Item 2' },
                { text: 'Item 1' },
                { text: 'Item 3' }
            ]
        });
        expect(state.lists[2]).toEqual({
            title: 'Custom List 3',
            items: []
        });
    });

    it('should handle moveItemToEmptyList', () => {
        const action = moveItemToEmptyList({
            dragListIndex: 0,
            dragItemIndex: 0,
            hoverListIndex: 2
        });
        store.dispatch(action);

        const state = store.getState() as ListsState;
        expect(state.lists).toHaveLength(3);
        expect(state.lists[0]).toEqual({
            title: 'Custom List 1',
            items: [{ text: 'Item 2' }]
        });
        expect(state.lists[1]).toEqual({
            title: 'Custom List 2',
            items: [{ text: 'Item 1' }, { text: 'Item 2' }, { text: 'Item 3' }]
        });
        expect(state.lists[2]).toEqual({
            title: 'Custom List 3',
            items: [{ text: 'Item 1' }]
        });
    });
});
