import { FaPlus } from 'react-icons/fa';

const AddListForm = () => {
    return (
        <div className="list">
            <div className="item">
                <input type="text" placeholder="Add List" />
                <button title="Add List">
                    <FaPlus />
                </button>
            </div>
        </div>
    );
};

export default AddListForm;
