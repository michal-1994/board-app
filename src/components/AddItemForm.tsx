import { FaPlus } from 'react-icons/fa';

const AddItemForm = () => {
    return (
        <div className="item">
            <input type="text" placeholder="Dodaj Item" />
            <button>
                <FaPlus />
            </button>
        </div>
    );
};

export default AddItemForm;
