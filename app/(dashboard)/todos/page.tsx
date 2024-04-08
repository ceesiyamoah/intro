import TodoList from "@/components/TodoList"
import db from "@/utils/db"
import { Metadata } from "next"

const getTodos = async () => {
  const todos = await db.todo.findMany({})
  return todos
}

export const metadata: Metadata = {
  title: "Todos",
}

const TodosPage = async () => {
  const todos = await getTodos()
  return (
    <div>
      <TodoList todos={todos} />
    </div>
  )
}

export default TodosPage
