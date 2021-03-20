import React from 'react'
import "./Input.css";

const Input=(props)=> {
    return (
        <div>
            <p>{props.title}</p>
            <input className="input" type={props.type} placeholder={props.placeholder} maxLength={props.maxLength} name={props.name}  onChange={props.onChange}
            />

        </div>
    )
}

export default Input
