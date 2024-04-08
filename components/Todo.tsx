"use client"
import { completeTodo } from "@/utils/actions"
import { Todo as TodoType } from "@prisma/client"
import { useTransition } from "react"

const Todo = ({ todo }: { todo: TodoType }) => {
  const [isPending, startTransition] = useTransition()

  const handleClick = () => {
    startTransition(() => completeTodo(todo.id))
  }

  return (
    <div
      className={`border border-black/20 cursor-pointer ${
        todo.completed ? "line-through text-gray-900" : ""
      }`}
      onClick={handleClick}
    >
      {todo.content}
    </div>
  )
}

export default Todo
