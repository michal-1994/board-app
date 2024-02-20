import { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useDrag, useDrop } from 'react-dnd';
import { MdDelete } from 'react-icons/md';
import { changeItem, moveItem, removeItem } from '../reducer';

const Item = ({ itemId, listId, text }: any) => {
    const dispatch = useDispatch();
    const ref = useRef<HTMLDivElement>(null);
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const [textCopy, setTextCopy] = useState<string>('');
    const [textareaHeight, setTextareaHeight] = useState<string>('auto');

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
        accept: 'item',
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
        type: 'item',
        item: () => {
            return { listId, itemId };
        }
    });

    drag(drop(ref));

    const opacity = isOver ? 0 : 1;

    return (
        <div className="item-bg" ref={ref} style={{ opacity }}>
            <textarea
                rows={1}
                ref={textareaRef}
                style={{ height: textareaHeight }}
                placeholder="Item"
                value={text}
                onChange={e => {
                    dispatch(
                        changeItem({ listId, itemId, text: e.target.value })
                    );
                }}
                onFocus={e => {
                    setTextCopy(e.target.value);
                }}
                onBlur={e => {
                    if (e.target.value.length === 0) {
                        dispatch(
                            changeItem({ listId, itemId, text: textCopy })
                        );
                    }
                }}></textarea>
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
