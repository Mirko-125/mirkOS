"use client";

import { useState, useRef, ReactNode } from "react";
import { ContextMenu } from "@/components/contextmenu"; // client compontent
interface ContextMenuState {
  show: boolean;
  x: number;
  y: number;
}

interface ChildrenProp {
  children: ReactNode;
}

export const ContextMenuWrap = (props: ChildrenProp) => {
  const { children } = props;
  const [contextMenu, setContextMenu] = useState<ContextMenuState>({
    show: false,
    x: 0,
    y: 0,
  });

  const openContextMenuHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setContextMenu({ show: true, x: e.clientX, y: e.clientY });
  };

  const closeContextMenuHandler = () => {
    setContextMenu({ show: false, x: 0, y: 0 });
  };

  const contextAreaRef = useRef<HTMLDivElement>(null);

  return (
    <div>
      <div ref={contextAreaRef} onContextMenu={openContextMenuHandler}>
        {children}
      </div>
      {contextMenu.show && (
        <ContextMenu
          x={contextMenu.x}
          y={contextMenu.y}
          onCloseContextMenu={closeContextMenuHandler}
          parentRef={contextAreaRef}
        >
          This is my context menu
        </ContextMenu>
      )}
    </div>
  );
};
