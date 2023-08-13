import React from 'react'



export default function StyledButton({text, width, fontSize, handleOnClick}) {
  const ButtonStyle = {
    height: 'fit-content',
    color: 'white',
    borderRadius: '0.5rem',
    background: 'linear-gradient(270deg, #484BB4 0%, rgba(72, 75, 180, 0.85) 100%)',
    border: 'none',
    padding: '0.75rem 1.5rem',
    width: `${width}`,
    fontSize: `${fontSize}`
  }

  return (
    <>
      <button
        style={ButtonStyle}
        onClick={(e) => {
          e.preventDefault()
          handleOnClick && handleOnClick()
        }}
        >
          {text}
      </button>
    </>
  )
}


