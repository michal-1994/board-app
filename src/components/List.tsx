import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import AddItemForm from './AddItemForm';
import Item from './Item';

const List = () => {
    const items = [1, 2, 3];

    return (
        <Col as={Card} className="bg-dark text-white p-4 m-2">
            {items.map((item, index) => (
                <Item key={index} />
            ))}
            <AddItemForm />
        </Col>
    );
};

export default List;
