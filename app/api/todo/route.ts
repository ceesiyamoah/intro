import { NextResponse } from "next/server"
import db from "@/utils/db"

export const GET = async (req: Request) => {
  const todos = await db.todo.findMany({})
  return NextResponse.json({ data: todos })
}

export const POST = async (req: Request) => {
  const data = await req.json()
  const todo = await db.todo.create({
    data,
  })
  return NextResponse.json(todo)
}
