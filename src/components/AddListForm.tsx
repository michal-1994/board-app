import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { Form } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';
import { addList } from '../reducer';
import { ADD_LIST_TITLE_ERROR } from '../constants';

const AddListForm = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState<string>('');

    const handleAddList = (e: any) => {
        e.preventDefault();

        if (title.length === 0) return toast.info(ADD_LIST_TITLE_ERROR);

        dispatch(addList({ title, items: [] }));
        setTitle('');
    };

    return (
        <Form className="list">
            <div className="item">
                <input
                    type="text"
                    placeholder="Add List"
                    value={title}
                    onChange={e => {
                        setTitle(e.target.value);
                    }}
                />
                <button title="Add List" onClick={handleAddList}>
                    <FaPlus />
                </button>
            </div>
        </Form>
    );
};

export default AddListForm;
