

import { PlusCircle } from 'phosphor-react';
import styles from './FormNewTask.module.css';



export function FormNewTask() {
    return (
        <form className={styles.formNewTask}>
            <input className={styles.inputNewTask} type="text" placeholder="Adicione uma nova tarefa" />
            <button className={styles.buttonNewTask}><p>Criar</p><PlusCircle size={'16'}/> </button>
        </form>
    )
}