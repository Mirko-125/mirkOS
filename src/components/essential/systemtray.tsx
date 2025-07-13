"use client";
import { NetworkButton } from "@/components/essential/networkbutton";

import dynamic from "next/dynamic";

const Time = dynamic(() => import("./time"), {
  loading: () => <div>...</div>,
  ssr: false,
});

export const SystemTray = () => (
  <div className="flex items-center space-x-4 pr-4" aria-label="System tray">
    <NetworkButton />
    <Time />
  </div>
);
