import AddItemForm from './AddItemForm';
import Item from './Item';
import ListTitleForm from './ListTitleForm';
import { IItem } from '../interfaces/IItem';

const List = ({ listId, title, items }: any) => {
    return (
        <div className="list">
            <ListTitleForm listId={listId} title={title} />
            {items.map((item: IItem, index: number) => (
                <Item
                    key={index}
                    itemId={index}
                    listId={listId}
                    text={item.text}
                />
            ))}
            <AddItemForm listId={listId} />
        </div>
    );
};

export default List;
