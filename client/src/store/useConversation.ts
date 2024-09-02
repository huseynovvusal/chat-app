import { IMessage } from "@/interfaces/message"
import { create } from "zustand"

interface ConversationState {
  selectedConversation: string | null //? ID
  setSelectedConversation: (selectedConversation: string) => void
  messages: { [key: string]: IMessage[] }
  setMessages: (key: string, messages: IMessage[]) => void
}

const useConversation = create<ConversationState>((set) => ({
  selectedConversation: null,
  setSelectedConversation: (selectedConversation) =>
    set({ selectedConversation }),
  messages: {},
  setMessages: (key, messages) => {
    set((state) => ({
      messages: {
        ...state.messages,
        [key]: messages,
      },
    }))
  },
}))

export default useConversation
