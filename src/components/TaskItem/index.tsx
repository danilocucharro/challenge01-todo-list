import { TaskItemContent } from './styles';
import { Trash } from "phosphor-react";

interface TaskItemProps {
  description: string,
  isDone?: boolean,
  deleteTask: (description: string) => void;
}

export function TaskItem (props: TaskItemProps) {
  return(
    <TaskItemContent>
      <form>
        <input type="checkbox" checked={props.isDone} onChange={() => !props.isDone}/>
        <label>{props.description}</label>
      </form>

      <button onClick={() => props.deleteTask(props.description)}>
        <Trash size={20} />
      </button>
    </TaskItemContent>
  )  
}