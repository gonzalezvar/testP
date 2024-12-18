import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState("")
  const [listTask, setListTask] = useState([])


  const getListToDos = async () => {
    try {
      const response = await fetch("https://playground.4geeks.com/todo/users/prueba2");
      const result = await response.json()
      setListTask(result.todos)
    } catch (error) {
      console.log(error)
    }
  }

  const saveTask = async () => {
    try {
      const taskToSent = {
        "label": inputValue,
        "is_done": false
      }
      const response = await fetch("https://playground.4geeks.com/todo/todos/prueba2", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(taskToSent)
      })

      if (!response.ok) {
        alert("Tarea creada exitosamente")
      }

      const result = await response.json();
      setListTask(prevListTaks => [...prevListTaks, result])
      setInputValue("")
    } catch (error) {
      console.log(error)
    }
  }

  const editTodo = async (id) => {
    try {
      const body = {
        "label": "tarea #111",
        "is_done": true
      }

      const response = await fetch(`https://playground.4geeks.com/todo/todos/${id}`, {
        method: "PUT",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      })

      if (!response.ok) {
        alert("No se puedo editar el toDo")
      }

      alert("Se edito el todo")

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getListToDos();
  }, [])


  return (
    <>
      <input
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value)}
        style={{ marginRight: "10px" }}
      />
      <button
        onClick={saveTask}
      >Guardar tarea</button>

      <ul>
        {listTask.map(task => (
          <div key={task.id}>
            <li>{task.label}</li>
            <button
              onClick={()=>editTodo(task.id)}
            >Editar</button>
          </div>
        ))}
      </ul>
    </>
  )
}

export default App









