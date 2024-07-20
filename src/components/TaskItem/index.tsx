import { TaskItemContent } from './styles';
import { Trash } from "phosphor-react";

interface TaskItemProps {
  id: string,
  description: string,
  isDone: boolean,
  deleteTask: (id: string, isDone: boolean) => void,
  changeTaskStatus: (task: {id: string, description: string, isDone: boolean}) => void,
}

export function TaskItem (props: TaskItemProps) {
  return(
    <TaskItemContent finished={props.isDone.toString()}>
      <div>
        <div>
          <input 
            type="checkbox"
            onChange={() => props.changeTaskStatus(props)}
          />
        </div>
        <label>{props.description}</label>
      </div>

      <button onClick={() => props.deleteTask(props.id, props.isDone)}>
        <Trash size={20} />
      </button>
    </TaskItemContent>
  )  
}