import "./globals.css";

import { ReactNode } from "react";

import { ContextMenuWrap } from "@/components/essential/contextmenuwrap"; // client component
import { Wallpaper } from "@/components/essential/wallpaper";
import { Taskbar } from "@/components/essential/taskbar";

export const metadata = {
  title: "mirkOS",
  description: "my own webpage that looks like an operating system",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ContextMenuWrap>
          <Wallpaper background="#55347b" />{" "}
          {/*{undefined} for default wallpaper*/}
          {children}
        </ContextMenuWrap>
        <Taskbar />
      </body>
    </html>
  );
}
