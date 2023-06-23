import React from 'react'

//Polymorphic component, allowing you to control what the return tag should be with the help of prop, instead of always returning the same div element, better for sematic

type TextOwnProps<E extends React.ElementType> = {
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'secondary'
  children: React.ReactNode
  // as?: React.ElementType //doing this allow auto complete of all html tag, however does not include all element default attribute e.g. label and for attribute
  as?: E //so we moved to custom type with <> at the beginning of the type
}

type TextProps<E extends React.ElementType> = TextOwnProps<E> & Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>

export default function Text<E extends React.ElementType = 'div'>({size, color, children, as}: TextProps<E>) {
  const Component = as || 'div' //if as is passed in then we can use that as the tag below, otherwise default to a div
  return (
    <Component className={`class-with-${size}-${color}`}>{children}</Component>
  )
}
