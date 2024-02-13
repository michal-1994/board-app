import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import AddListForm from './AddListForm';
import List from './List';

const Board = () => {
    const lists = [1, 2, 3];

    return (
        <Container>
            <Row>
                {lists.map((list, index) => (
                    <List key={index} />
                ))}
                <AddListForm />
            </Row>
        </Container>
    );
};

export default Board;
