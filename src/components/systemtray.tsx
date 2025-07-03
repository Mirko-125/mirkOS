import { Time } from "./time"; // client only component

export const SystemTray = () => (
  <div className="flex items-center space-x-4 pr-4" aria-label="System tray">
    <Time />
  </div>
);