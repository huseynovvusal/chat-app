import { MessageProps } from "@/interfaces/props"
import { createdAtChatDate } from "@/utils/date"
import { formattedMultilineText } from "@/utils/text"

export default function Message({
  text,
  sender,
  createdAt,
  incoming = false,
}: MessageProps) {
  return (
    <div
      className={`flex my-1 ${
        incoming ? "flex-row" : "flex-row-reverse"
      } items-end gap-2`}
    >
      <img
        className="w-10 h-10 rounded-full select-none pointer-events-none"
        src={sender.profilePicture}
      />
      <div
        className={`max-w-md flex flex-col py-2 px-4 ${
          incoming
            ? "bg-slate-300 text-slate-800 self-start rounded-bl-none"
            : "bg-slate-900 text-slate-100 self-end rounded-br-none"
        } rounded-xl gap-1`}
      >
        <p className="text-bas font-regular">{formattedMultilineText(text)}</p>

        <span
          className={`text-xs text-slate-500 select-none ${
            incoming ? "self-end" : "self-start"
          }`}
        >
          {createdAtChatDate(createdAt)}
        </span>
      </div>
    </div>
  )
}
