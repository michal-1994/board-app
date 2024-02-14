import AddItemForm from './AddItemForm';
import Item from './Item';
import ListTitleForm from './ListTitleForm';

const List = ({
    listId,
    listTitle,
    onAddItem,
    onRemoveItem,
    onRemoveList,
    onChangeList
}: any) => {
    const items = [1, 2, 3];

    return (
        <div className="list">
            <ListTitleForm
                listId={listId}
                listTitle={listTitle}
                onRemoveList={onRemoveList}
                onChangeList={onChangeList}
            />
            {items.map((item, index) => (
                <Item
                    key={index}
                    itemId={index}
                    listId={listId}
                    onRemoveItem={onRemoveItem}
                />
            ))}
            <AddItemForm listId={listId} onAddItem={onAddItem} />
        </div>
    );
};

export default List;
