import React from "react";

const DesktopIcon = ({ color }: { color: string }) => (
  <div
    className={`w-[50px] h-[50px] mx-2 my-2`}
    style={{ backgroundColor: color }}
  />
);

const Page = () => {
  return (
    <div className="relative h-[calc(100vh-48px)] w-full">
      <div className="flex flex-col flex-wrap h-full w-full">
        <DesktopIcon color="#FFA500" />
        <DesktopIcon color="#FFA500" />
        <DesktopIcon color="#FFA500" />
        <DesktopIcon color="#FFA500" />
        <DesktopIcon color="#FFA500" />
        <DesktopIcon color="#FFA500" />
        <DesktopIcon color="#FFA500" />
        <DesktopIcon color="#FFA500" />
        <DesktopIcon color="#FFA500" />
        <DesktopIcon color="#FFA500" />
        <DesktopIcon color="#FFA500" />
        <DesktopIcon color="#FFA500" />
        <DesktopIcon color="#FFA500" />
        <DesktopIcon color="#FFA500" />
        <DesktopIcon color="#FFA500" />
        <DesktopIcon color="#FFA500" />
        <DesktopIcon color="#FFA500" />
        <DesktopIcon color="#FFA500" />
        <DesktopIcon color="#FFA500" />
        <DesktopIcon color="#FFA500" />
        <DesktopIcon color="#FFA500" />
        <DesktopIcon color="#FFA500" />
        <DesktopIcon color="#FFA500" />
        <DesktopIcon color="#FFA500" />
        <DesktopIcon color="#FFA500" />
        <DesktopIcon color="#FFA500" />
        <DesktopIcon color="#FFA500" />
      </div>

      <div className="absolute bottom-0 right-0 w-[50px] h-[50px] mx-2 my-2 bg-[#ff0000]" />
    </div>
  );
};

export default Page;
