
import "./global.css";
import { uuid } from 'uuidv4';
import styles from "./App.module.css";
import { Header } from "./components/Header";
import { FormNewTask } from "./components/FormNewTask";
import { HeaderList } from "./components/HeaderList";
import { NoTasksView } from "./components/NoTasksView";

interface Task {
  id: string;
  content: string;
  completed: boolean;
}

let taskList: Task[] = [{id: uuid(),content: "Hello",completed: false}]

export function App() {
  return (
    <>
      <Header/>
      <FormNewTask/>
      <HeaderList totalCreatedTasks={0} totalCompletedTasks={0}/>
      {!taskList.length ? <NoTasksView /> : taskList.map(task => <p>Tem coisas</p>)}
      
    </>
  );
}
