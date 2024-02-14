import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import AddListForm from './AddListForm';
import List from './List';
import { IList } from '../interfaces/IList';
import { IItem } from '../interfaces/IItem';

import { LISTS } from '../data';

const Board = () => {
    const [lists, setLists] = useState<IList[]>(LISTS);

    const handleAddList = (listTitle: string) => {
        console.log('handleAddList: ', listTitle);
    };

    const handleChangeList = (listId: number, listTitle: string) => {
        console.log('handleChangeList');
        const newList = lists.map((list, index) => {
            if (listId === index) {
                return {
                    ...list,
                    title: listTitle
                };
            }
            return list;
        });
        setLists(newList);
    };

    const handleRemoveList = (listId: number) => {
        console.log('handleRemoveList: ', listId);
    };

    const handleAddItem = (itemText: string, listId: number) => {
        console.log('handleAddItem: ', itemText, listId);
    };

    const handleChangeItem = (
        itemId: number,
        listId: number,
        itemText: string
    ) => {
        console.log('handleChangeItem: ', itemId, listId, itemText);

        const newItems = lists[listId].items.map(
            (item: IItem, index: number) => {
                if (itemId === index) {
                    return {
                        text: itemText
                    };
                }
                return item;
            }
        );

        const newList = lists.map((list, index) => {
            if (listId === index) {
                return {
                    ...list,
                    items: newItems
                };
            }
            return list;
        });
        setLists(newList);
    };

    const handleRemoveItem = (itemId: number, listId: number) => {
        console.log('handleRemoveItem: ', itemId, listId);
    };

    return (
        <Container>
            <div className="board">
                {lists.map((list, index) => (
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
