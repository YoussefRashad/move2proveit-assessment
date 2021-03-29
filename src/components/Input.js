import React from 'react'

const Input = ({ styleInput, type, name, setInput, placeholder, InputValue }) => {
    return (
        <input
            className={{...styleInput} + " add_product_form_input"}
            type={type}
            name={name}
            value={InputValue}
            onChange={e => setInput(e.target.value)}
            required
            placeholder={placeholder}
        />
    )
}

export default Input
