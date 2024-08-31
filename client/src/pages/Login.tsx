import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"
import React, { useState } from "react"
import { Link } from "react-router-dom"

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
        <Input
          type="text"
          placeholder="Username"
          value={form.username}
          onChange={(e) => setForm({ ...form, username: e.target.value })}
        />
        <Input
          type="password"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <Button type="submit">Login</Button>

        <Link to="/signup">
          <p className="text-sm text-blue-800">Don't have an account?</p>
        </Link>
      </form>
    </div>
  )
}
