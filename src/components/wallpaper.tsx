"use client";
import { useState, useRef } from "react";
import { ContextMenu } from "@/components/contextmenu";

interface WallpaperProps {
  background?: string;
}

interface ContextMenuState {
  show: boolean;
  x: number;
  y: number;
}

export const Wallpaper = ({ background = "#1a4988" }: WallpaperProps) => {
  const style: React.CSSProperties = {
    position: "fixed",
    inset: 0,
    zIndex: -1,
    background: background.startsWith("https")
      ? `url(${background}) center/cover no-repeat`
      : background,
  };
  const [contextMenu, setContextMenu] = useState<ContextMenuState>({
    show: false,
    x: 0,
    y: 0,
  });
  const openContextMenuHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setContextMenu({ show: true, x: e.clientX, y: e.clientY });
  };
  const closeContextMenuHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setContextMenu({ show: false, x: 0, y: 0 });
  };
  const contextAreaRef = useRef<HTMLDivElement>(null);
  return (
    <div>
      <div
        style={style}
        aria-hidden="true"
        ref={contextAreaRef}
        onContextMenu={(e) => openContextMenuHandler(e)}
      />
      ;
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
