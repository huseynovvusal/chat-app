import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"
import React, { useState } from "react"

export default function Login() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  })

  const handleSubmit = () => {
    // ...
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="border-[0.5px] shadow-lg py-6 px-6 rounded-3xl w-[350px] flex flex-col  gap-4"
      >
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-medium">Login</h2>
          <p className="text-sm text-muted-foreground">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
        <Input type="text" placeholder="Username" value={form.username} />
        <Input type="password" placeholder="Password" value={form.password} />
        <Button type="submit">Login</Button>
      </form>
    </div>
  )
}
