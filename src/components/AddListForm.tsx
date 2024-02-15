import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Form } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';
import { addList } from '../reducer';

const AddListForm = () => {
    const dispatch = useDispatch();
    const [title, setTitle] = useState<string>('');

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
                <button
                    title="Add List"
                    onClick={e => {
                        e.preventDefault();
                        dispatch(addList({ title, items: [] }));
                        setTitle('');
                    }}>
                    <FaPlus />
                </button>
            </div>
        </Form>
    );
};

export default AddListForm;
