import { Check, Trash } from "phosphor-react";
import { TaskInterface } from "../App";
import styles from "./Task.module.css";

interface TaskPropsWithFunction {
    task: TaskInterface;
    toggleTaskStatus: ({ id, value }: { id: number; value: boolean }) => void
}

export function Task({ task, toggleTaskStatus } : TaskPropsWithFunction ) {
    const taskSpanCheckedName = task.isCompleted ?
        styles['checkbox-checked'] :
        styles['checkbox-unchecked'];
    
    const taskContentCheckedName = task.isCompleted ?
    styles['task-content-checked'] :
    styles['task-content-unchecked'];

    function handleCompleteTaks() {
        toggleTaskStatus({id: task.id, value: !task.isCompleted});
    }

    return (
        <div className={styles.task}>
            <label htmlFor="checkbox" onClick={handleCompleteTaks}>
                <input className={styles.taskCheckbox} type="checkbox" name="taskcomplete"  id="checkbox"/>
                <span className={`${styles.taskSpan} ${taskSpanCheckedName}`}>{ task.isCompleted && <Check size={12}/>}</span>
            </label>
            <p className={`${styles.taskContent} ${taskContentCheckedName}`}>{task.content}</p>


            <button className={styles.taskButton}>
                <Trash className={styles.taskSvg}/>
            </button>
        </div>
    )
}