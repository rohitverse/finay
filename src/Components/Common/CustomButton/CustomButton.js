import React from 'react'
import "./CustomButton.scss"

const CustomButton = ({ className, type, onClick, disabled, text, onlyicon }) => {
    return (
        <>
            <button className={`btn-style ${className}`} type={type} onClick={onClick} disabled={disabled}>
                {text}
                {onlyicon && (
                    <span>{onlyicon}</span>
                )}
            </button>
        </>
    )
}

export default CustomButton