import React from 'react'
import { forwardRef } from 'react'

export const PinItem = forwardRef(({ onChange, onBackSpaceHandler }, ref) => {
    const handlekeyup = (e) => {
        if (e.keyCode === 8) {
            onBackSpaceHandler(e)
        } else {
            onChange(e)
        }
    }
    return (
        <div>
            <input
                ref={ref}
                maxLength={1}
                onKeyUp={handlekeyup}
            />
        </div>
    )
})
