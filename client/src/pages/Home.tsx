import SideBar from "@/components/SideBar"
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable"
import React from "react"

export default function Home() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel minSize={20} defaultSize={30} maxSize={40}>
          <SideBar />
        </ResizablePanel>
        <ResizableHandle className="w-[2px] active:w-[3px]" />
        <ResizablePanel>Chat</ResizablePanel>
      </ResizablePanelGroup>
    </div>
  )
}
