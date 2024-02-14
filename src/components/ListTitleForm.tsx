import { MdDelete } from 'react-icons/md';

const ListTitleForm = ({
    listId,
    listTitle,
    onRemoveList,
    onChangeList
}: any) => {
    return (
        <div className="item">
            <input
                type="text"
                placeholder="Title"
                value={listTitle}
                onChange={e => {
                    onChangeList(listId, e.target.value);
                }}
            />
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
