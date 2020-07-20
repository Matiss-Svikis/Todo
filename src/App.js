import React from "react"
import TodoItem from "./Components/TodoItem.js";
import styles from "./Styles/mystyle.module.css";
import todosData from "./todosData"
import NewItemInput from "./Components/NewItemInput"
import {DragDropContext, Droppable} from 'react-beautiful-dnd'
import DroppableComponent from './Components/DroppableComponent'

class App extends React.Component
{
  constructor(){
    super()
    var localStorageState = JSON.parse(localStorage.getItem('localState'))
    if(localStorageState.isLocalStorageEnabled){
      this.state={
        todos: localStorageState.todos,
        isLocalStorageEnabled: true
      }
    }
    else{     
      this.state={
        todos: todosData,
        isLocalStorageEnabled:false
      }   
    }
    this.handleChange=this.handleChange.bind(this)
    this.removeItem=this.removeItem.bind(this)
    this.addNewItem=this.addNewItem.bind(this)
    this.toggleLocalStorage=this.toggleLocalStorage.bind(this)    
    this.saveToLocalStorage=this.saveToLocalStorage.bind(this)
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

  toggleLocalStorage(){
    this.setState(prevState=>{
      return{
        isLocalStorageEnabled: !prevState.isLocalStorageEnabled
      }
    })
    this.saveToLocalStorage()
  }

  saveToLocalStorage(){
      var stateJson=JSON.stringify(this.state)
      localStorage.setItem('localState', stateJson)    
  }

  onDragEnd=result=>{

  }

  render(){
    this.saveToLocalStorage()
    return (
      <div className={styles.todoList}>
        <DragDropContext
        onDragEnd={this.onDragEnd}
        >
          <Droppable droppableId="column-1">
            {(provided)=>{
              const todoItems= this.state.todos.map((item, index) => (
              <div
                ref={provided.innerRef} 
                {...provided.droppableProps} 
                key={item.id*100}
                >

                <TodoItem 
                key={item.id} 
                item={item} 
                handleChange={this.handleChange} 
                removeItem={this.removeItem}
                index={index*10}
                />
                {provided.placeholder}
              </div>
                ))
              return todoItems
            }}
          </Droppable>
        </DragDropContext>
          <NewItemInput addNewItem={this.addNewItem}/>       
          <span className={styles.localStorageCheckBox}>
            <input 
            type="checkbox" 
            checked={this.state.isLocalStorageEnabled}
            onChange={()=>{this.toggleLocalStorage()}}
            />
            Check to Enable local storage
          </span>         
      </div>
    )
  }
}
 export default App