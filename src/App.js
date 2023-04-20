import {useState} from 'react'
import {useEffect} from 'react'
import Header from './Header'

function App() {
  const [task, setTask] = useState('')
  const [tasks, setTasks] = useState([]) 
  useEffect(() => {
    const storageTasks = JSON.parse(localStorage.getItem('tasks'))
    if (storageTasks) {
      setTasks(storageTasks)
    }
  }, []) 
  
  const submitForm = () => {
    setTasks(prev => {
      const newTasks = [...prev, task]
      const jsonTasks = JSON.stringify(newTasks)
      localStorage.setItem('tasks', jsonTasks)
      return newTasks
    }) 
    setTask('')
  }

  const deleteTasks = (index) => {
    const newTasks = tasks.filter((item, i) => i !== index) 
    setTasks(newTasks)
    localStorage.setItem('tasks', JSON.stringify(newTasks))
  }
  
  return (
    <div style={{padding: 30}} className="App">
      <Header title= "To do list"/>
      
      <br></br>
      <input placeholder='Type to add a task'
        value = {task}
        onChange = {e => setTask(e.target.value)}
      />
      <button
        onClick = {submitForm}
        style={{color: "green", fontWeight: "Bold", marginLeft: "30px" }}>Add</button>
      <div class="displayTask">
        <ul>
          {tasks && tasks.map((task, index) => ( 
            <li key={index}>{task}
              <button style={{color: "red", fontWeight: "Bold", marginLeft: "10px" }}
                onClick={() => deleteTasks(index)}>X
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;

