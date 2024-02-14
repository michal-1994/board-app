import Container from 'react-bootstrap/Container';
import AddListForm from './AddListForm';
import List from './List';

const Board = () => {
    const lists = [1, 2, 3];

    const handleAddList = (listTitle: string) => {
        console.log('handleAddList: ', listTitle);
    };

    const handleAddItem = (itemText: string, listId: number) => {
        console.log('handleAddItem: ', itemText);
        console.log('handleAddItem: ', listId);
    };

    return (
        <Container>
            <div className="board">
                {lists.map((list, index) => (
                    <List
                        key={index}
                        listId={index}
                        onAddItem={handleAddItem}
                    />
                ))}
                <AddListForm onAddList={handleAddList} />
            </div>
        </Container>
    );
};

export default Board;
