import { UserProps } from "@/interfaces/props"

export default function User({
  firstName,
  lastName,
  username,
  profilePicture,
  disabled = false,
  selected = false,
}: UserProps) {
  return (
    <div
      className={`flex items-center gap-3 select-none border-[1px] border-transparent rounded-lg ${
        !disabled && "hover:border-slate-200 px-2 py-2 cursor-pointer"
      } ${selected && "bg-slate-200 border-slate-400 pointer-events-none"}`}
    >
      <img
        className="w-12 h-12 rounded-full pointer-events-none border-2 border-transparent outline-dashed outline-2 outline-gray-300"
        src={profilePicture}
      />
      <div className="flex flex-col">
        <span className="font-medium text-base text-slate-800">
          {firstName} {lastName}
        </span>
        <span className="font-regular text-xs text-slate-600">@{username}</span>
      </div>
    </div>
  )
}
