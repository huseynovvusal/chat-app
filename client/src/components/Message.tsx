import { MessageProps } from "@/interfaces/props"

export default function Message({
  text,
  sender,
  createdAt,
  incoming = false,
}: MessageProps) {
  return (
    <div
      className={`flex ${
        incoming ? "flex-row" : "flex-row-reverse"
      } items-end gap-2`}
    >
      <img className="w-10 h-10 rounded-full" src={sender.profilePicture} />
      <div
        className={`max-w-md flex flex-col py-2 px-4 ${
          incoming
            ? "bg-slate-300 text-slate-800 self-start rounded-bl-none"
            : "bg-slate-900 text-slate-100 self-end rounded-br-none"
        } rounded-xl gap-1`}
      >
        <p className="text-bas font-regular">{text}</p>

        <span
          className={`text-xs text-slate-500 ${
            incoming ? "self-end" : "self-start"
          }`}
        >
          {new Date(createdAt).toDateString()}
        </span>
      </div>
    </div>
  )
}
