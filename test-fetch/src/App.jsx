import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [toDo, setToDo] = useState([])

  const loadToDos = async () => {
    try {
      const response = await fetch('https://playground.4geeks.com/todo/users/juan')
      const result = await response.json()
      setToDo(result.todos)
    } catch (error) {
      console.log(error)
    }
  }

  const saveToDo = async () => {
    try {
      const body = {
        "label": "tarea #4",
        "is_done": false
      }
      const response = await fetch("https://playground.4geeks.com/todo/todos/juan", {
        method: "POST",
        headers: {
          accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      })
      const result = await response.json()
      setToDo(prevState=>[...prevState,result])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    // saveToDo();
    loadToDos()
  }, [])


  return (
    <>
      <ul>
        {toDo.map(item => (
          <li>{item.label}</li>
        ))}
      </ul>
      <button onClick={saveToDo}>Añadir nueva tarea</button>
    </>
  )
}

export default App









