import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';

const AddListForm = ({ onAddList }: any) => {
    const [listTitle, setListTitle] = useState<string>('');

    return (
        <div className="list">
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
                    onClick={() => {
                        onAddList(listTitle);
                        setListTitle('');
                    }}>
                    <FaPlus />
                </button>
            </div>
        </div>
    );
};

export default AddListForm;
