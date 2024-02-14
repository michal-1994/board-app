import { MdDelete } from 'react-icons/md';

const Item = ({ itemId, listId, onRemoveItem }: any) => {
    return (
        <div className="item-bg">
            <input type="text" placeholder="Item" />
            <button
                title="Remove Item"
                onClick={() => {
                    onRemoveItem(itemId, listId);
                }}>
                <MdDelete />
            </button>
        </div>
    );
};

export default Item;
