import { MdDelete } from 'react-icons/md';

const Item = () => {
    return (
        <div className="item-bg">
            <input type="text" placeholder="Item" />
            <button title="Remove Item">
                <MdDelete />
            </button>
        </div>
    );
};

export default Item;
