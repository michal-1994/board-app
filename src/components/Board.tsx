import { useSelector, useDispatch } from 'react-redux';
import Container from 'react-bootstrap/Container';
import AddListForm from './AddListForm';
import List from './List';
import {
    ListsState,
    addItem,
    addList,
    changeItem,
    changeList,
    removeItem,
    removeList
} from '../reducer';

const Board = () => {
    const lists = useSelector(({ lists }: ListsState) => lists);
    const dispatch = useDispatch();

    const handleAddList = (listTitle: string) => {
        dispatch(addList({ title: listTitle, items: [] }));
    };

    const handleChangeList = (listId: number, listTitle: string) => {
        dispatch(changeList({ listId, listTitle }));
    };

    const handleRemoveList = (listId: number) => {
        dispatch(removeList({ listId }));
    };

    const handleAddItem = (itemText: string, listId: number) => {
        dispatch(addItem({ itemText, listId }));
    };

    const handleChangeItem = (
        itemId: number,
        listId: number,
        itemText: string
    ) => {
        dispatch(changeItem({ itemText, listId, itemId }));
    };

    const handleRemoveItem = (itemId: number, listId: number) => {
        dispatch(removeItem({ listId, itemId }));
    };

    return (
        <Container>
            <div className="board">
                {lists.map((list: { title: any; items: any }, index: any) => (
                    <List
                        key={index}
                        listId={index}
                        listTitle={list.title}
                        items={list.items}
                        onAddItem={handleAddItem}
                        onRemoveItem={handleRemoveItem}
                        onChangeItem={handleChangeItem}
                        onRemoveList={handleRemoveList}
                        onChangeList={handleChangeList}
                    />
                ))}
                <AddListForm onAddList={handleAddList} />
            </div>
        </Container>
    );
};

export default Board;
