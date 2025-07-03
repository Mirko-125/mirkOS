import { StartButton } from "./startbutton"
import { SystemTray } from "./systemtray" // client component

export const Taskbar = () =>
{
    return (
        <div className="fixed bottom-0 left-0 right-0 h-12 bg-black text-gray-300 flex items-center select-none z-50"
            role="toolbar"
            aria-label="taskbar">
            <StartButton />
            {/* Quick launch area */}
            <div className="flex-grow" /> {/* Spacer */}
            <SystemTray />
        </div>
    )
}