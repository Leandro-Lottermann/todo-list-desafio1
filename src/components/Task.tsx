import { Trash } from "phosphor-react";
import { TaskInterface } from "../App";
import styles from "./Task.module.css";

interface TaskPropsWithFunction {
    task: TaskInterface;
}

export function Task({ task } : TaskPropsWithFunction ) {
    return (
        <div className={styles.task}>
            <input className={styles.taskInput} type="checkbox" name="taskcomplete" defaultChecked={ task.isCompleted }/>
            {/* usar o input com display none e um span para o visual */}
            <p className={styles.taskContent}>{task.content}</p>
            <button className={styles.taskButton}>
                <Trash className={styles.taskSvg}/>
            </button>
        </div>
    )
}