import { TaskListContainer, TaskListInfoContainer, TaskInfoProgress, TaskListContent } from "./styles";

import svgClipboard from "../../assets/Clipboard.svg";

export function TaskList() {
  return(
    <TaskListContainer>
      <TaskListInfoContainer>
        <div>
          <span>Tarefas criadas</span>
          <TaskInfoProgress>0</TaskInfoProgress>
        </div>

        <div>
          <span>Concluídas</span>
          <TaskInfoProgress>0</TaskInfoProgress>
        </div>
      </TaskListInfoContainer>

      <TaskListContent>
        <div>
          <img src={svgClipboard} />
          <span>Você ainda não tem tarefas cadastradas</span> Crie tarefas e organize seus itens a fazer
        </div>
      </TaskListContent>
    </TaskListContainer>
  )
}