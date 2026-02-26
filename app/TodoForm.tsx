"use client"
import { type ChangeEventHandler, useState, useEffect } from 'react' 

interface TodoFormProps {
  addTodo: (todo: string) => void
}

const TodoForm = ({ addTodo }: TodoFormProps) => {
  const [todo, setTodo] = useState('')
  const handleTodoFormChanged: ChangeEventHandler<HTMLInputElement> = (event) => {
    setTodo(event.target.value)
  }
  const handleAddTodo = () => {
    addTodo(todo)
    setTodo('')
  }

  return (
    <>
      <input type="text" onChange={handleTodoFormChanged} value={todo} />
      <button onClick={handleAddTodo}>Add Todo</button>
    </>
  )
}

interface Todo {
  id: number;
  content: string;
}

interface TodoListProps {
  todos: Todo[]
}

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <ul>
      {todos.map(todo => <li key={todo.id}>{todo.content}</li>)}
    </ul>
  )
}


const IndexPage = () => {
  const [isCheck, setIsCheck] = useState(false)
  const [todos, setTodos] = useState<Todo[]>([]) 

  const url = 'https://jsonplaceholder.typicode.com/todos'

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        const formattedTodos = data.slice(0, 5).map((item: any) => ({
          id: item.id,
          content: item.title 
        }))
        setTodos(formattedTodos)
      })
  }, [])

  const addTodo = (todo: string) => {
    setTodos([{ id: todos.length + 1, content: todo }, ...todos])
  }

  const handleIscheck = (event: any) => {
    setIsCheck(event.target.checked)
  }
  return (
    <>
      <TodoForm addTodo={addTodo}></TodoForm>
      <TodoList todos={todos}></TodoList>
      { isCheck && <div>Checked</div>}
      <input type="checkbox" onChange={handleIscheck}/>
    </>
  )       
}


export default IndexPage