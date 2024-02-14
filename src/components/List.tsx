import AddItemForm from './AddItemForm';
import Item from './Item';
import ListTitleForm from './ListTitleForm';

const List = ({ listId, onAddItem }: any) => {
    const items = [1, 2, 3];

    return (
        <div className="list">
            <ListTitleForm />
            {items.map((item, index) => (
                <Item key={index} />
            ))}
            <AddItemForm listId={listId} onAddItem={onAddItem} />
        </div>
    );
};

export default List;
