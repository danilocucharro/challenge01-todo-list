import { TaskFormContainer, TaskFormContent } from "./styled";
import { PlusCircle } from "phosphor-react";

export function AddTaskForm() {
  return(
    <TaskFormContainer>
      <TaskFormContent>
        <input type="text" placeholder="Adicionar uma nova tarefa"/>

        <button
          type="submit"
        >
          Criar
          <PlusCircle size={20}/>
        </button>
      </TaskFormContent>
    </TaskFormContainer>
  )
}