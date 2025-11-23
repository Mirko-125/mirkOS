interface ContextMenuItemProps {
  icon: string;
  label: string;
  onClick: () => void;
}

export const ContextMenuItem = ({
  icon,
  label,
  onClick,
}: ContextMenuItemProps) => {
  return (
    <button
      className="w-full px-4 py-2 text-left text-black text-sm font-sans hover:bg-[#316ac5] hover:text-white flex items-center gap-2 border-none bg-transparent"
      onClick={onClick}
    >
      <span className="w-4 h-4 flex items-center justify-center">
        <img 
          src={icon} 
          alt="" 
          className="w-full h-full object-contain image-rendering-pixelated" 
          style={{ imageRendering: 'pixelated' }}
          draggable={false}
        />
      </span>
      {label}
    </button>
  );
};
