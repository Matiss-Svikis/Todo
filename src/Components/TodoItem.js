import React from "react";
import styles from "./../Styles/mystyle.module.css"

function TodoItem(props)
{
    return(
        <form>
        <label className={styles.todoItem}>      
          <input  type="checkbox" />
          <span>
            Item {props.number}
          </span>
        </label>
      </form>
    )
}
export default TodoItem