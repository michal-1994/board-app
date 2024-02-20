import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Form } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';
import { addItem } from '../reducer';
import { ADD_ITEM_TEXT_ERROR } from '../constants';

interface AddItemFormProps {
    listId: number;
}

const AddItemForm: React.FC<AddItemFormProps> = ({ listId }) => {
    const dispatch = useDispatch();
    const [text, setText] = useState<string>('');

    const handleAddItem = (e: any) => {
        e.preventDefault();

        if (text.length === 0) return toast.info(ADD_ITEM_TEXT_ERROR);

        dispatch(addItem({ listId, text }));
        setText('');
    };

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
            <button title="Add Item" onClick={handleAddItem}>
                <FaPlus />
            </button>
        </Form>
    );
};

export default AddItemForm;
