import AddItemForm from './AddItemForm';
import Item from './Item';

const List = () => {
    const items = [1, 2, 3];

    return (
        <div className="list">
            {items.map((item, index) => (
                <Item key={index} />
            ))}
            <AddItemForm />
        </div>
    );
};

export default List;
