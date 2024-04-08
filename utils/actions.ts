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
  prisma.$queryRaw``
  await prisma.todo.update({
    where: {
      id,
    },
    data: {
      completed: true,
    },
  })
  revalidatePath("/todos")
}
