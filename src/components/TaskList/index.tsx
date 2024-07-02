import {
  TaskListContainer,
  TaskListInfoContainer, 
  TaskInfoCounter, 
  TaskInfoContent, 
  TaskListContentEmpty,
  TaskListItems,
  TaskFormContainer,
  TaskFormContent
} from "./styles";

import { TaskItem } from "../TaskItem";
import svgClipboard from "../../assets/Clipboard.svg";
import { useState } from "react";
import { PlusCircle } from "phosphor-react";

interface TasksProps{
  description: string,
  isDone: boolean,
}

export function TaskList() {
  const [newTask, setNewTask] = useState("")
  const [tasks, setTasks] = useState<TasksProps[]>([])

  function handleCreateNewTask() {
    event?.preventDefault()

    setTasks([
      ...tasks,
      {
        description: newTask,
        isDone: false
      }
    ])
  }

  return(
    <main>
    <TaskFormContainer>
      <TaskFormContent onSubmit={handleCreateNewTask}>
        <input 
          type="text" 
          placeholder="Adicionar uma nova tarefa" 
          onChange={(e) => setNewTask(e.target.value)}
          required
        />

        <button
          type="submit"
        >
          Criar
          <PlusCircle size={20}/>
        </button>
      </TaskFormContent>
    </TaskFormContainer>

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
          {tasks.map((task) => (
            <TaskItem 
              key={task.description}
              description={task.description}
              isDone={task.isDone}
            />
          ))}
        </TaskListItems>
        }
      </section>
    </TaskListContainer>
    </main>
  )
}