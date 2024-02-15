import { useDispatch } from 'react-redux';
import { MdDelete } from 'react-icons/md';
import { changeItem, removeItem } from '../reducer';

const Item = ({ itemId, listId, text }: any) => {
    const dispatch = useDispatch();

    return (
        <div className="item-bg">
            <input
                type="text"
                placeholder="Item"
                value={text}
                onChange={e => {
                    dispatch(
                        changeItem({ listId, itemId, text: e.target.value })
                    );
                }}
            />
            <button
                title="Remove Item"
                onClick={() => {
                    dispatch(removeItem({ listId, itemId }));
                }}>
                <MdDelete />
            </button>
        </div>
    );
};

export default Item;
