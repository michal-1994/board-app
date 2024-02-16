import { useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd';
import AddItemForm from './AddItemForm';
import Item from './Item';
import ListTitleForm from './ListTitleForm';
import { IItem } from '../interfaces/IItem';
import { moveList } from '../reducer';

const List = ({ listId, title, items }: any) => {
    const dispatch = useDispatch();
    const ref = useRef<HTMLDivElement>(null);

    const handleMoveList = useCallback(
        (dragIndex: number, hoverIndex: number) => {
            dispatch(moveList({ dragIndex, hoverIndex }));
        },
        []
    );

    const [, drop] = useDrop({
        accept: 'item',
        hover(item: any) {
            if (!ref.current) {
                return;
            }

            const dragIndex = item.listId;
            const hoverIndex = listId;

            if (dragIndex === hoverIndex) {
                return;
            }

            handleMoveList(dragIndex, hoverIndex);

            item.listId = hoverIndex;
        }
    });

    const [, drag] = useDrag({
        type: 'item',
        item: () => {
            return { listId };
        }
    });

    drag(drop(ref));

    return (
        <div className="list" ref={ref}>
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
