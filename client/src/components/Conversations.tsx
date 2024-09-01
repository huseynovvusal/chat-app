import useConversations from "@/hooks/useConversations"
import { IUser } from "@/interfaces/user"
import User from "./User"
import { IConversation } from "@/interfaces/conversation"
import Spinner from "./ui/spinner"

export default function Conversations() {
  const { loading, data } = useConversations()

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center py-4">
        <Spinner size={8} />
      </div>
    )
  }

  if (!data) return null

  return (
    <div className="flex flex-col gap-4">
      {data.map((conversation: any) => (
        <User key={conversation.receiver.username} {...conversation.receiver} />
      ))}
    </div>
  )
}
