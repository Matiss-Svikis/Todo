import React from "react"
import TodoItem from "./Components/TodoItem.js";
import styles from "./Styles/mystyle.module.css";
import todosData from "./todosData"

class App extends React.Component
{
  constructor(){
    super()
    this.state={
      todos: todosData
    }
    this.handleChange=this.handleChange.bind(this)
  }

  //marks the task as completed or not
  handleChange(id){
    this.setState(prevState=>{
      const updatedTodos=prevState.todos.map(todo=>{
        if(todo.id===id)
        {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo
      })
      return {
        todos: updatedTodos
      }
    })
  }
  
  render(){
    const todoItems= this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
    return (
      <div className={styles.todoList}>
          {todoItems}
      </div>
    )
  }
}
 export default App