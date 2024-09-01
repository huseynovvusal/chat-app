import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { SendIcon } from "lucide-react"
import React, { useEffect, useRef } from "react"
import { useParams } from "react-router-dom"

export default function Chat() {
  const { chatId } = useParams()

  const textAreaRef = useRef<HTMLTextAreaElement | null>(null)

  const adjustHeight = () => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = "auto"
      const scrollHeight = textAreaRef.current.scrollHeight
      const maxHeight = 150

      textAreaRef.current.style.overflowY = "hidden"

      if (scrollHeight > maxHeight) {
        textAreaRef.current.style.overflowY = "scroll"
      }

      textAreaRef.current.style.height = `${Math.min(
        scrollHeight,
        maxHeight
      )}px`
    }
  }

  return (
    <div className="w-full h-full flex flex-col justify-between px-6">
      <div className="w-full h-full bg-red-300"></div>

      <div className="flex rounded-[20px] gap-4 mb-4 bg-slate-200 items-center">
        <Textarea
          ref={textAreaRef}
          placeholder="Hello! How are you?"
          rows={1}
          className="resize-none border-none overflow-y-auto py-4 focus-visible:ring-0 focus-visible:ring-offset-0  bg-transparent"
          onInput={adjustHeight}
        />
        <Button variant="link">
          <SendIcon size={24} />
        </Button>
      </div>
    </div>
  )
}
