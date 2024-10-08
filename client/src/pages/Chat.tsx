import Messages from "@/components/Messages"
import { Button } from "@/components/ui/button"
import Spinner from "@/components/ui/spinner"
import { Textarea } from "@/components/ui/textarea"
import useGetMessages from "@/hooks/useGetMessages"
import useSendMessage from "@/hooks/useSendMessage"
import { SendIcon } from "lucide-react"
import { useRef, useState } from "react"
import { useParams } from "react-router-dom"

export default function Chat() {
  const [text, setText] = useState("")

  const { receiverId } = useParams()

  const { loading, sendMessage } = useSendMessage()
  const { loading: loadingMessages } = useGetMessages(receiverId || null)

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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!text || !receiverId) return

    await sendMessage({
      receiverId,
      text,
    })

    setText("")
    // adjustHeight()
  }

  return (
    <div className="w-full h-full flex flex-col justify-between">
      {loadingMessages ? (
        <div className="w-full h-full flex items-center justify-center">
          <Spinner size={8} />
        </div>
      ) : (
        <Messages />
      )}

      <div className="px-6 bg-transparent">
        <form
          onSubmit={handleSubmit}
          className={`flex rounded-[20px] px-2 gap-4 mb-4 bg-slate-200 items-center ${
            loading && "pointer-events-none cursor-not-allowed opacity-75"
          }`}
        >
          <Textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            ref={textAreaRef}
            placeholder="Hello! How are you?"
            rows={1}
            className="resize-none font-medium border-none overflow-y-auto py-4 focus-visible:ring-0 focus-visible:ring-offset-0  bg-transparent"
            onInput={adjustHeight}
          />
          <Button
            variant="default"
            className="rounded-full min-w-10 min-h-10 flex items-center justify-center bg-slate-800 p-0"
          >
            {loading ? <Spinner size={6} /> : <SendIcon size={16} />}
          </Button>
        </form>
      </div>
    </div>
  )
}
