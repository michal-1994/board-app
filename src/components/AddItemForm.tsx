import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';
import { addItem } from '../reducer';

const AddItemForm = ({ listId }: any) => {
    const dispatch = useDispatch();
    const [text, setText] = useState<string>('');

    return (
        <Form className="item">
            <input
                type="text"
                placeholder="Add Item"
                value={text}
                onChange={e => {
                    setText(e.target.value);
                }}
            />
            <button
                title="Add Item"
                onClick={e => {
                    e.preventDefault();
                    dispatch(addItem({ listId, text }));
                    setText('');
                }}>
                <FaPlus />
            </button>
        </Form>
    );
};

export default AddItemForm;
