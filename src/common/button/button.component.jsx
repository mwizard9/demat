import React from 'react'

import './button.css'

// interface ButtonProps {
//   onButtonClick: () => void
//   children: string
// }

export const CustomButton = ({
  onButtonClick,
  children
}) => {
  return (
    <div
      className="mt-3"
      style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
    >
      <button className="BtnButton" onClick={onButtonClick}>
        {children}
      </button>
    </div>
  )
}
