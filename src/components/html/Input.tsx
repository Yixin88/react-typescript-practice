import React from 'react'

type InputProps = React.ComponentProps<'input'>

export default function CustomInput(props: InputProps) {
  return (
    <input {...props}/> //doing this will unlock the usual onClick and so on
  )
}
