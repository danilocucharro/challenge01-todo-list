import { TaskItemContent } from './styles';
import { Trash } from "phosphor-react";

interface TaskItemProps {
  id: string,
  description: string,
  isDone: boolean,
  deleteTask: (description: string) => void,
  changeTaskStatus: (task: {id: string, description: string, isDone: boolean}) => void,
}

export function TaskItem (props: TaskItemProps) {
  return(
    <TaskItemContent>
      <div>
        <input 
          type="checkbox"
          onChange={() => props.changeTaskStatus(props)}
        />
        <label>{props.description}</label>
      </div>

      <button onClick={() => props.deleteTask(props.id)}>
        <Trash size={20} />
      </button>
    </TaskItemContent>
  )  
}