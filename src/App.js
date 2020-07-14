import React from "react"
import TodoItem from "./Components/TodoItem.js";
import styles from "./Styles/mystyle.module.css";
import todosData from "./todosData"
import NewItemInput from "./Components/NewItemInput"

class App extends React.Component
{
  constructor(){
    super()
    this.state={
      todos: todosData
    }
    this.handleChange=this.handleChange.bind(this)
    this.removeItem=this.removeItem.bind(this)
    this.addNewItem=this.addNewItem.bind(this)
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

  removeItem(id){
    this.setState(prevState=>{
      var UpdatedState = prevState.todos.filter(function(itemObject){
        if(itemObject.id===id){
          return false
        }
        else return true
      })
      return {
        todos: UpdatedState
      }
    })
  }

  addNewItem(text){
    var idCounter=0
    this.setState(prevState=>{
      var UpdatedState = prevState.todos.filter(function(object){
        if(object.id>idCounter){
          idCounter=object.id
        }
        return true
      })
      const newItem={
        id: idCounter+1,
        text: text,
        completed: false
      }      
      UpdatedState.push(newItem)
      return {
          todos: UpdatedState
        }
    })
  }

  render(){
    const todoItems= this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange} removeItem={this.removeItem}/>)
    return (
      <div className={styles.todoList}>
          {todoItems}
          <NewItemInput addNewItem={this.addNewItem}/>
      </div>
    )
  }
}
 export default App