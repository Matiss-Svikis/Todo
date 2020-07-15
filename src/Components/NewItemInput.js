import React from "react"
import inputStyle from "./../Styles/inputStyle.module.css"

class NewItemInput extends React.Component{
    constructor(){
        super()
        this.state={
            newItem: '',
            showError: {},
            placeHolderText: "Add new item",
            borderError: {}
        }
        this.handleChange=this.handleChange.bind(this)
        this.clearState= this.clearState.bind(this)
        this.showError=this.showError.bind(this)
        this.onFocus=this.onFocus.bind(this)
    }

    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value,
            showError:{},
            placeHolderText: "Add new item",
            borderError: {}
        })
    }

    clearState(){
        this.setState({
            newItem: ''
        })
    }

    showError(){ 
            const errorStyle={
                color: "#ff0000",
                fontSize: 16,
            }
            const borderErrorStyle={
                borderBottom: "2px solid #ff0000",                
            }
            this.setState({
                showError: errorStyle,
                placeHolderText: "Error, empty :(",
                borderError: borderErrorStyle
            })
    }

    onFocus() {
        this.setState({ 
            placeHolderText: "Add new item",
            showError:{},
            borderError: {}
        })
    }

   render(){
       return(
            <form className={[inputStyle.form__group].join(' ')}>
                <input 
                    name="newItem"
                    type="text"  
                    className={inputStyle.form__field} 
                    style={this.state.borderError}   
                    onChange={this.handleChange} 
                    placeholder="Name" 
                    required 
                    value={this.state.newItem}
                    onFocus={this.onFocus}
                />
                <label 
                    className={inputStyle.form__label} 
                    style={this.state.showError}
                >
                    {this.state.placeHolderText}
                </label>
                <a  
                    href="#" 
                    onClick={()=>{
                        if(this.state.newItem){
                            this.props.addNewItem(this.state.newItem)
                            this.clearState()
                        }
                        else{
                            this.showError()
                        }
                        }}
                    className={inputStyle.button1}
                >
                    Add
                </a>
            </form>
        )
    }
}
export default NewItemInput