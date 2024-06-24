import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Header } from "./components/Header";
import { AddTaskForm } from "./components/AddTaskForm";
import { TaskList } from "./components/TaskList";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      
      <Header />
      <AddTaskForm />
      <TaskList />
    </ThemeProvider>
  )
}