import React from "react"

export default function Profile() {
  return (
    <div className="flex items-center gap-3 select-none">
      <img
        className="w-12 h-12 rounded-full pointer-events-none border-2 border-transparent outline-dashed outline-2 outline-slate-400"
        src="https://avatar.iran.liara.run/username?username=Vusal+Huseynov"
      />
      <span className="font-medium text-base text-slate-800">
        Vusal Huseynov
      </span>
    </div>
  )
}
