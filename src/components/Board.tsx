import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import AddListForm from './AddListForm';
import List from './List';

interface IList {
    title: string;
}

const Board = () => {
    const [lists, setLists] = useState<IList[]>([
        {
            title: 'Todo'
        },
        {
            title: 'In Progress'
        },
        {
            title: 'Done'
        }
    ]);

    const handleAddList = (listTitle: string) => {
        console.log('handleAddList listTitle: ', listTitle);
    };

    const handleChangeList = (listId: number, listTitle: string) => {
        const newList = lists.map((list, index) => {
            if (listId === index) {
                return {
                    title: listTitle
                };
            }
            return list;
        });
        setLists(newList);
    };

    const handleRemoveList = (listId: number) => {
        console.log('handleRemoveList listId: ', listId);
    };

    const handleAddItem = (itemText: string, listId: number) => {
        console.log('handleAddItem itemText: ', itemText);
        console.log('handleAddItem listId: ', listId);
    };

    const handleRemoveItem = (itemId: number, listId: number) => {
        console.log('handleRemoveItem itemId: ', itemId);
        console.log('handleRemoveItem listId: ', listId);
    };

    return (
        <Container>
            <div className="board">
                {lists.map((list, index) => (
                    <List
                        key={index}
                        listId={index}
                        listTitle={list.title}
                        onAddItem={handleAddItem}
                        onRemoveItem={handleRemoveItem}
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
