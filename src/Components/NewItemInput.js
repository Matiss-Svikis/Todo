import React from "react"
import inputStyle from "./../Styles/inputStyle.module.css"

function NewItemInput(){
    return(
            <div className={[inputStyle.form__group, inputStyle.field].join(' ')}>
                <input type="text" className={inputStyle.form__field} placeholder="Name" required />
                <label className={inputStyle.form__label} ></label>
            </div>
    )
}

export default NewItemInput