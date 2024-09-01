import useConversations from "@/hooks/useConversations"
import User from "./User"
import Spinner from "./ui/spinner"
import { Link, useParams } from "react-router-dom"

export default function Conversations() {
  const { loading, data } = useConversations()

  const { chatId } = useParams()

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center py-4">
        <Spinner size={8} />
      </div>
    )
  }

  if (!data) return null

  return (
    <>
      {data?.length ? (
        <div className="flex flex-col gap-4">
          {data.map((conversation: any) => (
            <Link key={conversation._id} to={`/chats/${conversation._id}`}>
              <User
                selected={conversation._id === chatId}
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
    </>
  )
}
