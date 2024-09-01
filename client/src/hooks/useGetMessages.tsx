import useConversation from "@/store/useConversation"
import { useEffect, useState } from "react"

const useGetMessages = (receiverId: string | null) => {
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<string[] | null>(null)

  const { messages, setMessages } = useConversation()

  const getMessages = async () => {
    if (!receiverId) return

    setLoading(true)

    try {
      const response = await fetch(`/api/messages/${receiverId}`)

      const data = await response.json()

      if (!data.success) {
        setErrors(data.errors)
      }

      setMessages(data.data)
    } catch (error) {
      setErrors([error as string])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getMessages()
  }, [receiverId])

  return { loading, errors }
}

export default useGetMessages
