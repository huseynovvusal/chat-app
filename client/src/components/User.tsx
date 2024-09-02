import { UserProps } from "@/interfaces/props"

export default function User({
  firstName,
  lastName,
  username,
  profilePicture,
  disabled = false,
  selected = false,
  online = false,
}: UserProps) {
  return (
    <div
      className={`flex items-center gap-3 select-none border-[1px] border-transparent rounded-lg ${
        !disabled && "hover:border-slate-200 px-2 py-2 cursor-pointer"
      } ${selected && "bg-slate-200 border-slate-400 pointer-events-none"}`}
    >
      <div className="relative">
        <img
          className="w-12 h-12 min-w-12 min-h-12 rounded-full pointer-events-none"
          src={profilePicture}
        />
        {online && (
          <span className="inline-block w-3 h-3 bg-green-500 rounded-full absolute bottom-[0.1rem] right-[0.1rem] border-2 border-background" />
        )}
      </div>
      <div className="flex flex-col items-start">
        <span className="font-medium text-base text-slate-800">
          {firstName} {lastName}
        </span>
        <span className="font-regular text-xs text-slate-600">@{username}</span>
      </div>
    </div>
  )
}
