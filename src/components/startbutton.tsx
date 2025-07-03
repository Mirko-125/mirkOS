import defaultIcon from '@/assets/start.png';
import hoverIcon from '@/assets/start-hover.png';

export const StartButton = () => (
  <button
    className="group flex items-center justify-center w-12 h-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 relative"
    aria-label="Start menu"
  >
    <img
      src={defaultIcon.src}
      alt="Start icon"
      className="w-10 h-10 image-rendering-pixelated block group-hover:hidden"
      style={{ imageRendering: 'pixelated' }}
      draggable={false}
    />
    {/* when hovered */}
    <img
      src={hoverIcon.src}
      alt="Start icon hover"
      className="w-10 h-10 image-rendering-pixelated hidden group-hover:block"
      style={{ imageRendering: 'pixelated' }}
      draggable={false}
    />
  </button>
);