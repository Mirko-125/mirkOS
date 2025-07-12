import "./globals.css";
import { ContextMenuWrap } from "@/components/contextmenuwrap"; // client component
import { Wallpaper } from "@/components/wallpaper";
import { Taskbar } from "@/components/taskbar";

export const metadata = {
  title: "mirkOS",
  description: "my own webpage that looks like an operating system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
