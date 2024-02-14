import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';

const AddItemForm = ({ listId, onAddItem }: any) => {
    const [itemText, setItemText] = useState<string>('');

    return (
        <Form className="item">
            <input
                type="text"
                placeholder="Add Item"
                value={itemText}
                onChange={e => {
                    setItemText(e.target.value);
                }}
            />
            <button
                title="Add Item"
                onClick={e => {
                    e.preventDefault();
                    onAddItem(itemText, listId);
                    setItemText('');
                }}>
                <FaPlus />
            </button>
        </Form>
    );
};

export default AddItemForm;
