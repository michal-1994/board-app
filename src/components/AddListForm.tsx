import { useState } from 'react';
import { Form } from 'react-bootstrap';
import { FaPlus } from 'react-icons/fa';

const AddListForm = ({ onAddList }: any) => {
    const [listTitle, setListTitle] = useState<string>('');

    return (
        <Form className="list">
            <div className="item">
                <input
                    type="text"
                    placeholder="Add List"
                    value={listTitle}
                    onChange={e => {
                        setListTitle(e.target.value);
                    }}
                />
                <button
                    title="Add List"
                    onClick={e => {
                        e.preventDefault();
                        onAddList(listTitle);
                        setListTitle('');
                    }}>
                    <FaPlus />
                </button>
            </div>
        </Form>
    );
};

export default AddListForm;
