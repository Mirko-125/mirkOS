interface WallpaperProps {
  background?: string;
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

  return <div style={style} aria-hidden="true" />;
};
