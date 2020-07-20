import React from "react";
import styles from "./../Styles/mystyle.module.css"
import {faTrashAlt} from "@fortawesome/free-solid-svg-icons"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {Draggable} from 'react-beautiful-dnd'

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
      <Draggable draggableId={toString(props.item.id)} index={props.index}>
        {(provided)=>(
            <form 
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            >
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

        )}
      </Draggable>
    )
}
export default TodoItem