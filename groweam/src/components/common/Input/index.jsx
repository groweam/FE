import React from 'react'
import styled from 'styled-components'

export default function Input({label, name, placeholder, value, handleOnChange}) {
  const InputStyle = {
    height: '2.75rem',
    padding: '0.6rem 0.8rem',
    fontSize:'1rem',
    color: 'black',
    background: 'var(--input-bg)',
    border: '1px solid var(--input-border)',
    borderRadius: '0.5rem',
    boxSizing: 'border-box',
  }

  return (
    <>
      <InputContainer>
        <label>{label}</label>
        <input 
          type='text'
          name={name}
          value={value}
          placeholder={placeholder}
          style={InputStyle}
          onChange={handleOnChange}
        />
      </InputContainer>
    </>
  )
}

const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label{
    font-size: 1.125rem;
    font-weight: 500;

  }
`