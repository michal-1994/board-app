import { MdDelete } from 'react-icons/md';

const ListTitleForm = () => {
    return (
        <div className="item">
            <input type="text" placeholder="Title" />
            <button title="Remove List">
                <MdDelete />
            </button>
        </div>
    );
};

export default ListTitleForm;
