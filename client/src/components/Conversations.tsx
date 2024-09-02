import useConversations from "@/hooks/useConversations"
import User from "./User"
import Spinner from "./ui/spinner"
import { Link, useParams } from "react-router-dom"
import SideBarSectionTitle from "./SideBarSectionTitle"
import { useSocket } from "@/context/SocketContext"
import { ISocketContext } from "@/interfaces/context"

export default function Conversations() {
  const { onlineUsers } = useSocket() as ISocketContext

  const { receiverId } = useParams()

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
      <SideBarSectionTitle text="💬 Chats" />
      {data?.length ? (
        <div className="flex flex-col gap-4">
          {data.map((conversation: any) => (
            <Link
              key={conversation._id}
              to={{
                pathname: `/chats/${conversation.receiver._id}`,
              }}
            >
              <User
                online={onlineUsers.includes(conversation.receiver._id)}
                selected={conversation.receiver._id === receiverId}
                {...conversation.receiver}
              />
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-center text-sm text-muted-foreground py-10">
          No conversations found.
        </p>
      )}
    </div>
  )
}
