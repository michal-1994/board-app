import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { MdDelete } from 'react-icons/md';
import { changeList, removeList } from '../reducer';

const ListTitleForm = ({ listId, title }: any) => {
    const dispatch = useDispatch();
    const [titleCopy, setTitleCopy] = useState<string>('');

    return (
        <div className="item">
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={e => {
                    dispatch(changeList({ listId, title: e.target.value }));
                }}
                onFocus={e => {
                    setTitleCopy(e.target.value);
                }}
                onBlur={e => {
                    if (e.target.value.length === 0) {
                        dispatch(changeList({ listId, title: titleCopy }));
                    }
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
