import { useRef, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd';
import AddItemForm from './AddItemForm';
import Item from './Item';
import ListTitleForm from './ListTitleForm';
import { IItem } from '../interfaces/IItem';
import { moveItemToEmptyList, moveList } from '../reducer';
import { AcceptTypes } from '../types/AcceptTypes';

interface ListProps {
    listId: number;
    title: string;
    items: IItem[];
}

const List: React.FC<ListProps> = ({ listId, title, items }) => {
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

    const [{ isOver, itemType }, drop] = useDrop({
        accept: [AcceptTypes.LIST, AcceptTypes.ITEM],
        collect: monitor => ({
            isOver: monitor.isOver(),
            itemType: monitor.getItemType()
        }),
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

    const [, drag] = useDrag({
        type: AcceptTypes.LIST,
        item: () => {
            return { listId };
        }
    });

    drag(drop(ref));

    return (
        <div
            className="list"
            ref={ref}
            style={{
                opacity: isOver && itemType === AcceptTypes.LIST ? 0 : 1
            }}>
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
