import { useEffect, useState } from "react"

const useConversations = () => {
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState<string[] | null>(null)
  const [data, setData] = useState<any>(null)

  const getData = async () => {
    setLoading(true)

    try {
      const response = await fetch("/api/conversations")

      const data = await response.json()

      if (!data.success) {
        setErrors(data.errors)
      }

      setData(data.data)
    } catch (error) {
      setErrors([error as string])
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return { loading, errors, data }
}

export default useConversations
