import styles from './HeaderList.module.css';

interface HeaderListProps {
    totalCreatedTasks: number;
    totalCompletedTasks: number;
}

export function HeaderList({totalCreatedTasks, totalCompletedTasks}: HeaderListProps) {
    
    return (
        <div className={styles.headerList}>
            <div className={styles.createdInfo}>Tarefas criadas <span>{totalCreatedTasks}</span></div>
            <div className={styles.completedInfo}>Concluídas {' '} 
                {totalCreatedTasks ? <span>{totalCompletedTasks} de {totalCreatedTasks}</span> : <span>{totalCompletedTasks}</span>}
            
            </div>
        </div>
    )
}