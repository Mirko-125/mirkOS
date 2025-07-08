import React, { ReactNode, RefObject, useEffect } from 'react';

interface ContextMenuProps {
    x : number;
    y : number;
    onCloseContextMenu: (e: React.MouseEvent<HTMLDivElement>) => void; 
    parentRef: RefObject<HTMLDivElement | null>; 
    children: ReactNode; 
}

export const ContextMenu = (props: ContextMenuProps) => {

    const menuPosition = {
        top:`${props.y}px`,
        left:`${props.x}px`, 
    }

    return(
        <div className="p-2 absolute z-999 border-gray-500 bg-gray-300" style={menuPosition}>
            {props.children}
        </div>
    );
};