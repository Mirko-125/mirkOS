import networkIcon from '@/assets/network.png'

export const NetworkButton = () => (
    <button
    type="button"
    aria-label="Network status"
    className="
      p-1
      rounded-md
      hover:bg-gray-200
      focus:outline-none
      focus:ring-2
      focus:ring-gray-400
      transition-colors
      flex items-center justify-center
    "
  >
    <img
      src={networkIcon.src}
      alt="Network status"
      width={20}
      height={20}
      className="w-5 h-5 image-rendering-pixelated block group-hover:hidden" 
      draggable={false} 
    />
  </button>
)