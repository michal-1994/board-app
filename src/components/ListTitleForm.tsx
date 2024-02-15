import { useDispatch } from 'react-redux';
import { MdDelete } from 'react-icons/md';
import { changeList, removeList } from '../reducer';

const ListTitleForm = ({ listId, title }: any) => {
    const dispatch = useDispatch();

    return (
        <div className="item">
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={e => {
                    dispatch(changeList({ listId, title: e.target.value }));
                }}
            />
            <button
                title="Remove List"
                onClick={() => {
                    dispatch(removeList({ listId }));
                }}>
                <MdDelete />
            </button>
        </div>
    );
};

export default ListTitleForm;
