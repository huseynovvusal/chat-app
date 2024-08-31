import SideBar from "@/components/SideBar"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import { Outlet } from "react-router-dom"

export default function Home() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel minSize={25} defaultSize={30} maxSize={35}>
          <SideBar />
        </ResizablePanel>
        <ResizableHandle className="w-[2px] active:w-[3px]" />
        <ResizablePanel>
          <Outlet />
        </ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}
