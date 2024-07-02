import {
  TaskListContainer,
  TaskListInfoContainer, 
  TaskInfoCounter, 
  TaskInfoContent, 
  TaskItem, 
  TaskListContentEmpty,
  TaskListItems
} from "./styles";

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
          <TaskInfoCounter>5</TaskInfoCounter>
        </TaskInfoContent>

        <TaskInfoContent variant="purple">
          <span>Concluídas</span>
          <TaskInfoCounter>2 de 5</TaskInfoCounter>
        </TaskInfoContent>
      </TaskListInfoContainer>

      <section>
        {tasks.length < 1 ?
        <TaskListContentEmpty>
          <img src={svgClipboard} />
          <p><span>Você ainda não tem tarefas cadastradas</span> <br/>Crie tarefas e organize seus itens a fazer</p>
        </TaskListContentEmpty>
        :
        <TaskListItems>
          <TaskItem>
            <form>
              <input type="checkbox" />
              <label>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</label>
            </form>

            <button>
              <Trash size={20} />
            </button>
          </TaskItem>

          <TaskItem>
          <form>
            <input type="checkbox" />
            <label>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</label>
          </form>

          <button>
            <Trash size={20} />
          </button>
          </TaskItem>
        </TaskListItems>
        }
      </section>
    </TaskListContainer>
  )
}