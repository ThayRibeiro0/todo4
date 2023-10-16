import { useState } from 'react'

import Todo from './components/Todo'
import TodoForm from './components/TodoForm'

import './App.css'

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Create functionality X in the sistem",
      category: "Work",
      isCompleted: false,
    },
    { 
      id: 2,
      text: "Go to the gym", 
      category: "Personal", 
      isCompleted: false 
    },
    {
      id: 3,
      text: "Study React",
      category: "Studies",
      isCompleted: false,
    },
  ])

  const addTodo = (text, category) => {
    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isCompleted: false,
    }]
    setTodos(newTodos)
  }

  return ( 
    <div className="app">
      <h1>Todo list</h1>
      <div className='todo-list'>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </div>
      <TodoForm addTodo={addTodo}/>
    </div>
  )
}

export default App
