import React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'
import { useRef } from 'react'
import { PinItem } from './PinItem'
export const Pin = ({ length, setOtphandler }) => {
    const inputRef = useRef([])
    const [inputBoxLen] = useState(new Array(length).fill(1))
    const [input, setInput] = useState(new Array(length).fill(''))

    const handleChange = (e, index) => {
        input[index] = e.target.value;
        setInput(input)
        if (input[index] > 0 && index < length - 1) {
            inputRef.current[index + 1].focus()
        }
        setOtphandler(input.join(''))
    }

    const handleBackSpace = (e, index) => {
        if (index > 0) {
            inputRef.current[index - 1].focus()
        }
        input[index] = e.target.value;
        setInput(input)
        setOtphandler(input.join(''))
    }
const handlePaste = (e) => {
    
}

    return (
        <div onPaste = {handlePaste} style={{
            display: "flex",
            margin: "auto",
            justifyContent: "center"
        }}>
            {inputBoxLen.map((item, index) => {
                return (
                    <PinItem key={index} onChange={(e) => handleChange(e, index)} ref={(element) => {
                        inputRef.current[index] = element
                    }}

                        onBackSpaceHandler={(e) => handleBackSpace(e, index)} />
                )
            })}
        </div>
    )
}


Pin.propTypes = {
    length: PropTypes.number,
    onChange: PropTypes.func,
}




