import { IMessage } from "@/interfaces/message"
import { create } from "zustand"

interface ConversationState {
  selectedConversation: string | null //? ID
  setSelectedConversation: (selectedConversation: string) => void
  messages: IMessage[]
  setMessages: (messages: IMessage[]) => void
}

const useConversation = create<ConversationState>((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) =>
    set({ selectedConversation }),
  messages: [],
  setMessages: (messages) => set({ messages }),
}))

export default useConversation
