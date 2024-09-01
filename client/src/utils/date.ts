export const createdAtChatDate = (createdAt: string) => {
  const date = new Date(createdAt)

  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
  })

  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
}
