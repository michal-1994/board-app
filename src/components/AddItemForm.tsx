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
    const [itemText, setItemText] = useState<string>('');

    const handleAddItem = (e: any) => {
        e.preventDefault();

        if (itemText.length === 0) return toast.info(ADD_ITEM_TEXT_ERROR);

        dispatch(addItem({ listId, text: itemText }));
        setItemText('');
    };

    const handleChangeItem = (e: any) => {
        setItemText(e.target.value);
    };

    return (
        <Form className="item">
            <input
                type="text"
                placeholder="Add Item"
                value={itemText}
                onChange={handleChangeItem}
            />
            <button title="Add Item" onClick={handleAddItem}>
                <FaPlus />
            </button>
        </Form>
    );
};

export default AddItemForm;
