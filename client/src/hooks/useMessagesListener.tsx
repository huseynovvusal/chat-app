import { useSocket } from "@/context/SocketContext"
import { ISocketContext } from "@/interfaces/context"
import { IMessage } from "@/interfaces/message"
import useConversation from "@/store/useConversation"
import { useEffect } from "react"

const useMessagesListener = () => {
  const { socket } = useSocket() as ISocketContext
  const { messages, setMessages } = useConversation()

  useEffect(() => {
    socket?.on("newMessage", (newMessage: IMessage) => {
      const senderId = newMessage.sender._id as string
      setMessages(senderId, [...(messages[senderId] || []), newMessage])
    })

    return () => {
      socket?.off("newMessage")
    }
  }, [socket])
}

export default useMessagesListener
