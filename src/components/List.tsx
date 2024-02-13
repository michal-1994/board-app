import AddItemForm from './AddItemForm';
import Item from './Item';
import ListTitleForm from './ListTitleForm';

const List = () => {
    const items = [1, 2, 3];

    return (
        <div className="list">
            <ListTitleForm />
            {items.map((item, index) => (
                <Item key={index} />
            ))}
            <AddItemForm />
        </div>
    );
};

export default List;
