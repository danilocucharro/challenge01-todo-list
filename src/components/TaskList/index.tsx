import {
  TaskListContainer,
  TaskListInfoContainer, 
  TaskListContent, 
  TaskInfoCounter, 
  TaskInfoContent, 
  TaskItem } 
from "./styles";

import svgClipboard from "../../assets/Clipboard.svg";
import { useState } from "react";
import { Trash } from "phosphor-react";

interface TasksProps{
  id: number,
  description: string,
  isDone: boolean,
}

export function TaskList() {
  const [tasks, setTasks] = useState<TasksProps[]>([])

  return(
    <TaskListContainer>
      <TaskListInfoContainer>
        <TaskInfoContent variant="blue">
          <span>Tarefas criadas</span>
          <TaskInfoCounter>0</TaskInfoCounter>
        </TaskInfoContent>

        <TaskInfoContent variant="purple">
          <span>Concluídas</span>
          <TaskInfoCounter>0</TaskInfoCounter>
        </TaskInfoContent>
      </TaskListInfoContainer>

      <TaskListContent>
        {tasks.length > 1 ?
        <div>
          <img src={svgClipboard} />
          <span>Você ainda não tem tarefas cadastradas</span> Crie tarefas e organize seus itens a fazer
        </div>
        :
        <TaskItem>
          <form>
            <input type="checkbox" />
            <label>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</label>
          </form>

          <button>
            <Trash />
          </button>
        </TaskItem>
        }
      </TaskListContent>
    </TaskListContainer>
  )
}