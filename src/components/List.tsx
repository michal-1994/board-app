import { useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd';
import AddItemForm from './AddItemForm';
import Item from './Item';
import ListTitleForm from './ListTitleForm';
import { IItem } from '../interfaces/IItem';
import { moveItemToEmptyList, moveList } from '../reducer';

const List = ({ listId, title, items }: any) => {
    const dispatch = useDispatch();
    const ref = useRef<HTMLDivElement>(null);

    const handleMoveList = useCallback(
        (dragListIndex: number, hoverListIndex: number) => {
            dispatch(moveList({ dragListIndex, hoverListIndex }));
        },
        []
    );

    const handleMoveItem = useCallback(
        (
            dragListIndex: number,
            dragItemIndex: number,
            hoverListIndex: number
        ) => {
            dispatch(
                moveItemToEmptyList({
                    dragListIndex,
                    dragItemIndex,
                    hoverListIndex
                })
            );
        },
        []
    );

    const [, drop] = useDrop({
        accept: ['list', 'item'],
        hover(item: any) {
            if (!ref.current) {
                return;
            }

            const dragListIndex = item.listId;
            const dragItemIndex = item.itemId;
            const hoverListIndex = listId;

            if (dragListIndex === hoverListIndex) {
                return;
            }

            if (dragItemIndex === undefined) {
                handleMoveList(dragListIndex, hoverListIndex);
                item.listId = hoverListIndex;
            } else if (items.length === 0) {
                handleMoveItem(dragListIndex, dragItemIndex, hoverListIndex);
                item.listId = hoverListIndex;
                item.itemId = 0;
            }
        }
    });

    const [{ isDragging }, drag] = useDrag({
        type: 'list',
        item: () => {
            return { listId };
        },
        collect: (monitor: any) => ({
            isDragging: monitor.isDragging()
        })
    });

    drag(drop(ref));

    return (
        <div
            className="list"
            ref={ref}
            style={{ opacity: isDragging ? 0.5 : 1 }}>
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
