import React from "react"
import TodoItem from "./Components/TodoItem.js";
import styles from "./Styles/mystyle.module.css";

function App()
{
  return (
    <div className={styles.todoList}>
      <TodoItem number={1} />
      <TodoItem number={2} />
      <TodoItem number={3} />
    </div>
  )
}
 export default App