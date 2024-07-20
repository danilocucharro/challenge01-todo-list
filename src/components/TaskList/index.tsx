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
  id: string,
  description: string,
  isDone: boolean,
}

export function TaskList() {
  const [newTask, setNewTask] = useState<string>("")
  const [tasks, setTasks] = useState<TasksProps[]>([])
  const [taskFinishedCounter, setTaskFinishedCounter] = useState(0)

  function handleCreateNewTask() {
    event?.preventDefault()

    setTasks([
      {
        id: newTask.concat((Math.random() * (100 - 0) + 0).toFixed(2)),
        description: newTask,
        isDone: false
      },
      ...tasks
    ])

    const formTask = document.getElementById("formTask") as HTMLFormElement
    formTask.reset()
  }

  function handleDeleteTask(id: string, isDone: boolean) {
    const newTaskList = tasks.filter((task) => task.id != id)
    
    if(isDone){
      setTasks(newTaskList)
      setTaskFinishedCounter(taskFinishedCounter - 1)
    }
    else{
      setTasks(newTaskList)
    }
  }

  function handleChangeTaskStatus(task: TasksProps) {
    const newTaskList = tasks.filter((taskItem) => taskItem.id != task.id)

    if(task.isDone == false){
      setTasks([
        ...newTaskList,
        {
          id: task.id,
          description: task.description,
          isDone: !task.isDone
        }
      ])

      setTaskFinishedCounter(taskFinishedCounter + 1)
  
      console.log(tasks)
    }
    else {
      setTasks([
        {
          id: task.id,
          description: task.description,
          isDone: !task.isDone
        },
        ...newTaskList
      ])
  
      setTaskFinishedCounter(taskFinishedCounter - 1)
    }
  }

  return(
    <main>
    <TaskFormContainer>
      <TaskFormContent onSubmit={handleCreateNewTask} id="formTask">
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
          <TaskInfoCounter>{tasks.length}</TaskInfoCounter>
        </TaskInfoContent>

        <TaskInfoContent variant="purple">
          <span>Concluídas</span>
          <TaskInfoCounter>{taskFinishedCounter} de {tasks.length}</TaskInfoCounter>
        </TaskInfoContent>
      </TaskListInfoContainer>

      <section>
        {tasks.length < 1 ?
        <TaskListContentEmpty>
          <img src={svgClipboard} />
          <p><span>Você ainda não tem tarefas cadastradas</span> <br/>Crie tarefas e organize seus itens a fazer</p>
        </TaskListContentEmpty>
        :
        <div>
          <TaskListItems>
            {tasks.map((task) => (
              <TaskItem 
                id={task.id}
                key={task.id}
                description={task.description}
                isDone={task.isDone}
                deleteTask={handleDeleteTask}
                changeTaskStatus={handleChangeTaskStatus}
              />
            ))}
          </TaskListItems>
        </div>
        }
      </section>
    </TaskListContainer>
    </main>
  )
}