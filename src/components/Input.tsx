import React from 'react'

type InputProps = {
  value: string,
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input(props: InputProps) {

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    console.log(e.target.value)
  }

  return (
    <input type="text" value={props.value} onChange={handleInputChange}/>
  )
}
