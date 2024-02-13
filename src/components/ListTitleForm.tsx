import { MdDelete } from 'react-icons/md';

const ListTitleForm = () => {
    return (
        <div className="item">
            <input type="text" placeholder="List Title" />
            <button>
                <MdDelete />
            </button>
        </div>
    );
};

export default ListTitleForm;
