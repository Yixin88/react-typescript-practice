import React from 'react'

type ButtonProps = {
  variant: 'primary' | 'secondary',
  children: string
} & Omit<React.ComponentProps<'button'>, 'children'> //need to include the inside part "& React.ComponentProps<'element-name'>" for allowing props to have default attribute such as onClick and so on, need to specify what element it is

export default function CustomButton({variant, children, ...restOfTheAttribute}: ButtonProps) {
  return (
    <button className={`class-with-${variant}`} {...restOfTheAttribute}>{children}</button>
    //since children as part of the React.ComponentProps and can be anything from string to another component
    //but if we only want the children to be a string, we can omit from React.Component<'button'> shown above
  )
}
