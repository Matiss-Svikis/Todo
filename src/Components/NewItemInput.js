import React from "react"
import inputStyle from "./../Styles/inputStyle.module.css"
import { render } from "@testing-library/react"

class NewItemInput extends React.Component{
    constructor(){
        super()
        this.state={
            newItem: ''
        }
        this.handleChange=this.handleChange.bind(this)
        this.clearState= this.clearState.bind(this)
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    clearState(){
        this.setState({
            newItem: ''
        })
    }

   render(){
       return(
               <form className={[inputStyle.form__group].join(' ')}>

                <input name="newItem" type="text" className={inputStyle.form__field} onChange={this.handleChange} placeholder="Name" required value={this.state.newItem} />
                <label className={inputStyle.form__label} >Add new item</label>
                <a href="#" onClick={()=>{
                    this.props.addNewItem(this.state.newItem)
                    this.clearState()
                     }} className={inputStyle.button1}>Add</a>
               </form>
    )
}
}

export default NewItemInput