import style from './NoTasksView.module.css';
import clipBoard from '../assets/Clipboard.svg'

export function NoTasksView() {
    return (
        <div className={style.noTasksView}>
            <img src={clipBoard}></img>
            <p className={style.paragraphOne}>Você ainda não tem tarefas cadastradas</p>
            <p className={style.paragraphTwo}>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}