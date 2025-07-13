import networkIcon from '@/assets/network.png'

export const NetworkButton = () => (
    <button
    type="button"
    aria-label="Network status"
    className="
      group flex items-center justify-center w-12 h-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 relative
    "
  >
    <img
      src={networkIcon.src}
      alt="Network status"
      width={20}
      height={20}
      className="w-9 h-9 image-rendering-pixelated block" 
      style={{ imageRendering: 'pixelated' }}
      draggable={false} 
    />
  </button>
)