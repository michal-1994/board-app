import AddItemForm from './AddItemForm';
import Item from './Item';
import ListTitleForm from './ListTitleForm';
import { IItem } from '../interfaces/IItem';

const List = ({
    listId,
    listTitle,
    items,
    onAddItem,
    onRemoveItem,
    onChangeItem,
    onRemoveList,
    onChangeList
}: any) => {
    return (
        <div className="list">
            <ListTitleForm
                listId={listId}
                listTitle={listTitle}
                onRemoveList={onRemoveList}
                onChangeList={onChangeList}
            />
            {items.map((item: IItem, index: number) => (
                <Item
                    key={index}
                    itemId={index}
                    listId={listId}
                    itemText={item.text}
                    onRemoveItem={onRemoveItem}
                    onChangeItem={onChangeItem}
                />
            ))}
            <AddItemForm listId={listId} onAddItem={onAddItem} />
        </div>
    );
};

export default List;
