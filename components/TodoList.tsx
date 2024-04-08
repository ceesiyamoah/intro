import { Todo as TodoType } from "@prisma/client"
import Todo from "./Todo"

const TodoList = ({ todos }: { todos: TodoType[] }) => {
  return (
    <div>
      {todos.map((todo) => (
        <Todo todo={todo} key={todo.id} />
      ))}
    </div>
  )
}

export default TodoList
