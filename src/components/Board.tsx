import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import AddListForm from './AddListForm';
import List from './List';
import { ListsState } from '../reducer';

const Board = () => {
    const lists = useSelector(({ lists }: ListsState) => lists);

    return (
        <Container>
            <div className="board">
                {lists.map((list: { title: any; items: any }, index: any) => (
                    <List
                        key={index}
                        listId={index}
                        title={list.title}
                        items={list.items}
                    />
                ))}
                <AddListForm />
            </div>
        </Container>
    );
};

export default Board;
