import useConversation from "@/store/useConversation"
import Message from "./Message"
import { useAuth } from "@/context/AuthContext"
import { IAuthContext } from "@/interfaces/context"
import { useEffect, useRef } from "react"
import { useParams } from "react-router-dom"
import useMessagesListener from "@/hooks/useMessagesListener"

export default function Messages() {
  const { receiverId } = useParams()

  useMessagesListener()

  const messages = useConversation(
    (state) => state.messages[receiverId as string]
  )

  const ref = useRef<HTMLDivElement | null>(null)

  const { authUser } = useAuth() as IAuthContext

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollIntoView()
    }
  }, [messages, ref])

  if (!authUser) return

  return (
    <div className="flex flex-col  w-full h-full max-h-full px-6 overflow-y-scroll">
      {messages &&
        messages.map((message) => (
          <Message
            key={message._id as string}
            {...message}
            incoming={message.sender._id !== authUser._id}
          />
        ))}

      <div ref={ref} className="bottom" />
    </div>
  )
}
