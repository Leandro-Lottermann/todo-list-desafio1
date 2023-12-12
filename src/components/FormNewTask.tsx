

import { PlusCircle } from 'phosphor-react';
import styles from './FormNewTask.module.css';
import { ChangeEvent, FormEvent, useState } from 'react';

interface FormNewTask {
    onNewTask: (content: string) => void;
}

export function FormNewTask({onNewTask}: FormNewTask) {
    const [inputText, setInputText ] = useState("");

    function handleNewTask(event: FormEvent) {
        event.preventDefault();
        onNewTask(inputText);
        setInputText("");       
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        event?.target.setCustomValidity('');
        setInputText(event.target.value);
    }

    return (
        <form className={styles.formNewTask} onSubmit={handleNewTask}>
            <input className={styles.inputNewTask} type="text" placeholder="Adicione uma nova tarefa" value={inputText} onChange={handleNewTaskChange}/>
            <button type='submit' className={styles.buttonNewTask}><p>Criar</p><PlusCircle size={'16'}/> </button>
        </form>
    )
}