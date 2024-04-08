import { NextResponse } from "next/server"
import db from "@/utils/db"

export const GET = async (req: Request) => {
  const todos = await db.todo.findMany({})
  return NextResponse.json({ data: todos })
}
