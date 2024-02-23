import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd';
import { MdDelete } from 'react-icons/md';
import { changeItem, moveItem, removeItem } from '../state/lists/reducer';
import { AcceptTypes } from '../types/AcceptTypes';

interface ItemProps {
    listId: number;
    itemId: number;
    text: string;
}

const Item: React.FC<ItemProps> = ({ listId, itemId, text }) => {
    const dispatch = useDispatch();
    const ref = useRef<HTMLDivElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [textCopy, setTextCopy] = useState<string>('');
    const [textareaHeight, setTextareaHeight] = useState<string>('auto');

    const handleChangeItem = (e: any) => {
        dispatch(changeItem({ listId, itemId, text: e.target.value }));
    };

    const handleFocusItem = (e: any) => {
        setTextCopy(e.target.value);
    };

    const handleBlurItem = (e: any) => {
        if (e.target.value.length === 0) {
            dispatch(changeItem({ listId, itemId, text: textCopy }));
        }
    };

    const handleRemoveItem = () => {
        dispatch(removeItem({ listId, itemId }));
    };

    const adjustTextareaHeight = () => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`;
            setTextareaHeight(`${textarea.scrollHeight}px`);
        }
    };

    useEffect(() => {
        adjustTextareaHeight();
    }, [text]);

    const handleMoveItem = useCallback(
        (
            dragListIndex: number,
            dragItemIndex: number,
            hoverListIndex: number,
            hoverItemIndex: number
        ) => {
            dispatch(
                moveItem({
                    dragListIndex,
                    dragItemIndex,
                    hoverListIndex,
                    hoverItemIndex
                })
            );
        },
        []
    );

    const [{ isOver }, drop] = useDrop({
        accept: AcceptTypes.ITEM,
        collect: monitor => ({
            isOver: monitor.isOver()
        }),
        hover(item: any) {
            if (!ref.current) {
                return;
            }

            const dragListIndex = item.listId;
            const dragItemIndex = item.itemId;
            const hoverListIndex = listId;
            const hoverItemIndex = itemId;

            if (
                dragListIndex === hoverListIndex &&
                dragItemIndex === hoverItemIndex
            ) {
                return;
            }

            handleMoveItem(
                dragListIndex,
                dragItemIndex,
                hoverListIndex,
                hoverItemIndex
            );

            item.listId = hoverListIndex;
            item.itemId = hoverItemIndex;
        }
    });

    const [, drag] = useDrag({
        type: AcceptTypes.ITEM,
        item: () => {
            return { listId, itemId };
        }
    });

    drag(drop(ref));

    return (
        <div className="item-bg" ref={ref} style={{ opacity: isOver ? 0 : 1 }}>
            <textarea
                rows={1}
                ref={textareaRef}
                style={{ height: textareaHeight }}
                placeholder="Item"
                value={text}
                onChange={handleChangeItem}
                onFocus={handleFocusItem}
                onBlur={handleBlurItem}></textarea>
            <button title="Remove Item" onClick={handleRemoveItem}>
                <MdDelete />
            </button>
        </div>
    );
};

export default Item;
