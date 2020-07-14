import React from "react";
import styles from "./../Styles/mystyle.module.css"
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

function TodoItem(props)
{
  const completedStyle={
    fontStyle:"italic",
    color: "#cdcdcd",
    textDecoration: "line-through"
  }
  const iconStyle={
    marginLeft: "auto",
    marginRight: "0"
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
          <div style={iconStyle} onClick={()=>props.removeItem(props.item.id)}>
              <FontAwesomeIcon  icon={props.item.completed ? faTrashAlt : {display: "none"}}/>
          </div>
        </label>
      </form>
    )
}
export default TodoItem