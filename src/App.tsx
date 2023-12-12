
import "./global.css";

import styles from "./App.module.css";
import { Header } from "./components/Header";
import { FormNewTask } from "./components/FormNewTask";
import { HeaderList } from "./components/HeaderList";
import { NoTasksView } from "./components/NoTasksView";
import { Task } from "./components/Task";
import { v4 as uuidv4  } from "uuid";


export interface TaskInterface {
  id: string;
  content: string;
  isCompleted: boolean;
}

let taskList: TaskInterface[] = [{id: uuidv4(),content: "Fazer a tasklist", isCompleted: false}, {id: uuidv4(),content: "Fazer a tasklist com checked", isCompleted: true}]

export function App() {
  
  return (
    <>
      <Header/>
      <FormNewTask/>
      <HeaderList totalCreatedTasks={0} totalCompletedTasks={0}/>
      {!taskList.length ? <NoTasksView /> : taskList.map(task => <Task task={task} key={task.id}/>)}
      
    </>
  );
}
