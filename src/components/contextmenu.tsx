import React, { ReactNode, RefObject, useEffect } from "react";

interface ContextMenuProps {
  x: number;
  y: number;
  onCloseContextMenu: () => void;
  parentRef: RefObject<HTMLDivElement | null>;
  children: ReactNode;
}

export const ContextMenu = (props: ContextMenuProps) => {
  const menuPosition = {
    top: `${props.y}px`,
    left: `${props.x}px`,
  };

  useEffect(() => {
    const clickListener = (event: MouseEvent) => {
      const menuParent = props.parentRef?.current;
      if (!menuParent || !menuParent.contains(event.target as Node)) {
        return;
      }
      props.onCloseContextMenu();
    };
    document.addEventListener("mousedown", clickListener);
    return () => {
      document.removeEventListener("mousedown", clickListener);
    };
  }, [props.parentRef, props.onCloseContextMenu]);

  return (
    <div
      className="p-2 absolute z-999 border-gray-500 bg-gray-300"
      style={menuPosition}
    >
      {props.children}
    </div>
  );
};
