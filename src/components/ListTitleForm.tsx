import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { MdDelete } from 'react-icons/md';
import { changeList, removeList } from '../reducers/reducer';

interface ListTitleFormProps {
    listId: number;
    title: string;
}

const ListTitleForm: React.FC<ListTitleFormProps> = ({ listId, title }) => {
    const dispatch = useDispatch();
    const [titleCopy, setTitleCopy] = useState<string>('');

    const handleChangeList = (e: any) => {
        dispatch(changeList({ listId, title: e.target.value }));
    };

    const handleFocusList = (e: any) => {
        setTitleCopy(e.target.value);
    };

    const handleBlurList = (e: any) => {
        if (e.target.value.length === 0) {
            dispatch(changeList({ listId, title: titleCopy }));
        }
    };

    const handleRemoveList = () => {
        dispatch(removeList({ listId }));
    };

    return (
        <div className="item">
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={handleChangeList}
                onFocus={handleFocusList}
                onBlur={handleBlurList}
            />
            <button title="Remove List" onClick={handleRemoveList}>
                <MdDelete />
            </button>
        </div>
    );
};

export default ListTitleForm;
