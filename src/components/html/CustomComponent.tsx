import React from 'react'
import Greet from '../Greet'

//Let say we want to use a type for prop that we cannot export, e.g. we want to use the same type from the Greet.tsx component, instead of export we can use typeof

export default function CustomComponent(props: React.ComponentProps<typeof Greet>) { //now we basically exported the type from Greet but with out exporting kw, we now have access to all the autocomplete
  return (
    <div>
      {props.isLoggedIn}
    </div>
  )
}
