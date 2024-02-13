import Container from 'react-bootstrap/Container';
import AddListForm from './AddListForm';
import List from './List';

const Board = () => {
    const lists = [1, 2, 3];

    return (
        <Container>
            <div className="board">
                {lists.map((list, index) => (
                    <List key={index} />
                ))}
                <AddListForm />
            </div>
        </Container>
    );
};

export default Board;
