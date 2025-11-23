"use client";

import { useState, useRef, ReactNode } from "react";
import { ContextMenu } from "@/components/essential/contextmenu";
import { ContextMenuItem } from "@/components/essential/contextmenuitem";
import palleteIcon from "@/assets/pallete.png";
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
          <div className="bg-[#f1f1f1] border border-[#0054e3] shadow-lg min-w-[180px]">
            <ContextMenuItem
              icon={palleteIcon.src}
              label="Change wallpaper colour"
              onClick={() => {
                alert("Context menu button clicked!");
                closeContextMenuHandler();
              }}
            />
            <hr className="border-[#dfdfdf] mx-2" />
          </div>
        </ContextMenu>
      )}
    </div>
  );
};
