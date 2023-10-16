import { useState } from 'react'

import Todo from './components/Todo'

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

  return ( 
    <div className="app">
      <h1>Todo list</h1>
      <div className='todo-list'>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </div>
    </div>
  )
}

export default App
