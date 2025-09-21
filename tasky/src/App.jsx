import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Task from './components/Task';



function App() {
      const [ taskState, setTaskState ] = useState({
    tasks: [
      { id: 1, title:"Dishes", description: "Empty dishwasher", deadline: "Today", priority:"High"},
      { id: 2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow", priority:"Medium"},
      { id: 3, title: "Tidy up", deadline: "Today", priority:"Low" }
    ]
  });
    return (
    <div className="container">
      <h1>Tasky</h1>
        {taskState.tasks.map((task) => (              
    <Task 
      title={task.title}
      description={task.description}
      deadline={task.deadline}
      priority={task.priority}
      key={task.id}
    />
  ))} 
    </div>
  );


}

export default App
