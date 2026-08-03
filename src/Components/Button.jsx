import React from 'react'

const Button = ({ className, children }) => {
    return (
        <div>
            <button className={`bg-primary py-6 px-8 rounded-full  font-medium text-[#FAFAFA] ${className}`}>
                {children}
            </button>

        </div>
    )
}

export default Button
