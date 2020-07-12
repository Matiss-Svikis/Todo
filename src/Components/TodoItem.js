import React from "react";
import styles from "./../Styles/mystyle.module.css"

function TodoItem(props)
{
    return(
        <form>
        <label className={styles.todoItem}>      
          <input
             type="checkbox"
             checked={props.item.completed}
             onChange={()=>props.handleChange(props.item.id)}
          />
          <span>
            {props.item.text}
          </span>
        </label>
      </form>
    )
}
export default TodoItem