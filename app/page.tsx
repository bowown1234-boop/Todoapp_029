'use client'
import { useEffect, useState } from "react";

interface DataItem{
  id: number
  
}

const useFetch = <T extends DataItem>({url}: {url: string}) => {
  const [data, setData] = useState<T[]>([])
 
  useEffect(() => {
    const fetchUser = async() =>{
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
        setData(data)
    }
    fetchUser();
  }, [url]);
     
  return data;
}
interface User {
  id: number;
  name: string;
}

const User = () => {
  const url = "https://jsonplaceholder.typicode.com/users";
  const user = useFetch<User>({url})

  return (
    <ul>
      {user.map((user) => <li key={user.id}>{user.name}</li>)}
    </ul>
  )
}

interface Todo {
  id: number;
  title: string;
}

const Todo = () => {
    const url = "https://jsonplaceholder.typicode.com/todos";
  const todos = useFetch<Todo>({url})

  return (
    <ul>
      {todos.map((todo) => <li key={todo.id}>{todo.title}</li>)}
    </ul>
  )

}

const IndexPage = () => {
  return (
    <div>
      <User></User>
      <br></br>
      <Todo></Todo>
    </div>
  )
}
export default IndexPage
