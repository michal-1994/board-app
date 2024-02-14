import { MdDelete } from 'react-icons/md';

const Item = ({
    itemId,
    listId,
    itemText,
    onRemoveItem,
    onChangeItem
}: any) => {
    return (
        <div className="item-bg">
            <input
                type="text"
                placeholder="Item"
                value={itemText}
                onChange={e => {
                    onChangeItem(itemId, listId, e.target.value);
                }}
            />
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
