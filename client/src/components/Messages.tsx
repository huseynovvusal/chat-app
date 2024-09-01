import { IMessage } from "@/interfaces/message"
import useConversation from "@/store/useConversation"
import Message from "./Message"

export default function Messages({ data }: { data?: IMessage[] }) {
  const { messages } = useConversation()

  return (
    <>
      {messages.map((message) => (
        <Message key={message._id as string} {...message} />
      ))}
    </>
  )
}
