import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const AddItemForm = ({ listId, onAddItem }: any) => {
    const [itemText, setItemText] = useState<string>('');

    return (
        <div className="item">
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
                onClick={() => {
                    onAddItem(itemText, listId);
                    setItemText('');
                }}>
                <FaPlus />
            </button>
        </div>
    );
};

export default AddItemForm;
