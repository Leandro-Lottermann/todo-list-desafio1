
import "./global.css";

import styles from "./App.module.css";
import { Header } from "./components/Header";
import { FormNewTask } from "./components/FormNewTask";
import { HeaderList } from "./components/HeaderList";
import { NoTasksView } from "./components/NoTasksView";
import { Task } from "./components/Task";

import { useState } from "react";


export interface TaskInterface {
  id: number;
  content: string;
  isCompleted: boolean;
}


export function App() {
  const [tasks, setTasks] = useState<TaskInterface[]>([]);
  
  function onNewTask(content: string) {
    const newTask: TaskInterface = {
      id: new Date().getTime(),
      content,
      isCompleted: false,
    } 
    setTasks(() => {
      return [...tasks, newTask];
    });
  }

  
  
  function onCompleteTask({ id, value }: { id: number; value: boolean }): void {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isCompleted: value }
      }

      return { ...task }
    })

    setTasks(updatedTasks)
  }

  console.log(tasks)


  return (
    <>
      <Header/>
      <FormNewTask onNewTask={onNewTask}/>
      <HeaderList totalCreatedTasks={0} totalCompletedTasks={0}/>
      {tasks.length > 0 ?  (
        <div>
          {tasks.map(task => <Task key={task.id} task={task}  toggleTaskStatus={onCompleteTask}/>)
        }
        </div>
        ) : (
        <NoTasksView/>)
      }
      
    </>
  );
}
