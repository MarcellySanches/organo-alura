import { useState } from 'react'
import './InputText.css'

const InputText = (props) => {

    const onType = (event) => {
        props.onChange(event.target.value)
    }

    return (
        <div className="inputText">
            <label>{props.label}</label>
            <input value={props.value} required={props.required} placeholder={props.placeholder} onChange={onType}/>
        </div>
    )
}

export default InputText;
