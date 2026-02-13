"use client"
import { useState } from "react";

const Indexpage = () => {

  const [todo, setTodo] = useState("");
  const [todos, setTodos]  = useState([
    {id: 1, content: "Todo1"},
    {id: 2, content: "Todo2"},
    {id: 3, content: "Todo3"}
  ]);

  const handleAddTodofromchanged = (event) => {
    setTodo(event.target.value);
  };
  const addtodo = () =>{
    setTodos([{id:todos.length + 1, content: todo}, ...todos])
  };
  return(
    <>
      <input type="text" onChange={handleAddTodofromchanged} />
      <button onClick={addtodo}>Add</button>
    <ul>
      {todos.map(todo => <li key={todo.id}>{todo.content}</li>)}
    </ul>
    </>

  );
 
}
export default Indexpage;