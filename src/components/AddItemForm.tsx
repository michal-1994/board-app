import { FaPlus } from 'react-icons/fa';

const AddItemForm = () => {
    return (
        <div className="item">
            <input type="text" placeholder="Add Item" />
            <button title="Add Item">
                <FaPlus />
            </button>
        </div>
    );
};

export default AddItemForm;
