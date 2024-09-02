import useConversation from "@/store/useConversation"
import { useState } from "react"

const useSendMessage = () => {
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<string[] | null>(null)

  const { messages, setMessages } = useConversation()

  const sendMessage = async (formData: {
    receiverId: string
    text: string
  }) => {
    setLoading(true)

    try {
      const response = await fetch(
        `/api/messages/send/${formData.receiverId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      )

      const data = await response.json()

      if (!data.success) {
        setErrors(data.errors)
      } else {
        setMessages([...messages, data.data])
      }
    } catch (error) {
      setErrors([error as string])
    } finally {
      setLoading(false)
    }
  }

  return { loading, errors, sendMessage }
}

export default useSendMessage
