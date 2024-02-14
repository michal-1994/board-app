import { MdDelete } from 'react-icons/md';

const ListTitleForm = ({ listId, onRemoveList }: any) => {
    return (
        <div className="item">
            <input type="text" placeholder="Title" />
            <button
                title="Remove List"
                onClick={() => {
                    onRemoveList(listId);
                }}>
                <MdDelete />
            </button>
        </div>
    );
};

export default ListTitleForm;
