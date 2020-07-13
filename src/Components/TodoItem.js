import React from "react";
import styles from "./../Styles/mystyle.module.css"

function TodoItem(props)
{
  const completedStyle={
    fontStyle:"italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
  }
    return(
        <form>
        <label className={styles.todoItem}>      
          <input
             type="checkbox"
             checked={props.item.completed}
             onChange={()=>props.handleChange(props.item.id)}
          />
          <span>
            <p style={props.item.completed? completedStyle :null}>{props.item.text}</p>
          </span>
        </label>
      </form>
    )
}
export default TodoItem