"use server"
import { revalidatePath } from "next/cache"
import prisma from "./db"

export const createTodo = async (formData: FormData) => {
  const content = formData.get("content")?.toString() || ""
  await prisma.todo.create({
    data: { content },
  })

  revalidatePath("/todos")
}

export const completeTodo = async (id: string) => {
  const todo = await prisma.todo.findUnique({ where: { id } })
  await prisma.todo.update({
    where: { id },
    data: {
      completed: !todo?.completed,
    },
  })

  revalidatePath("/todos")
}
