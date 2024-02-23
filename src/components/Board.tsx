import { useSelector } from 'react-redux';
import Container from 'react-bootstrap/Container';
import AddListForm from './AddListForm';
import List from './List';
import { ListsState } from '../state/lists/reducer';
import { IList } from '../interfaces/IList';

const Board = () => {
    const lists = useSelector(({ lists }: ListsState) => lists);

    return (
        <Container>
            <div className="board">
                {lists.map((list: IList, index: number) => (
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
