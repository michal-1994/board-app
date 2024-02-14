import Container from 'react-bootstrap/Container';
import AddListForm from './AddListForm';
import List from './List';

const Board = () => {
    const lists = [1, 2, 3];

    const handleAddList = (listTitle: string) => {
        console.log('handleAddList listTitle: ', listTitle);
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
                        onAddItem={handleAddItem}
                        onRemoveItem={handleRemoveItem}
                        onRemoveList={handleRemoveList}
                    />
                ))}
                <AddListForm onAddList={handleAddList} />
            </div>
        </Container>
    );
};

export default Board;
