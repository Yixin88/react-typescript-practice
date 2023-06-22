import React, { ReactNode } from 'react'

type ListProps<T> = {
  items: T[],
  onClick: (value: T) => void
}

export default function List<T extends {}>({items, onClick}: ListProps<T>) { //The <T extends {}> tell it to accept all types, but if we want the type to be object with a id property which is number then we can do <T extends {id: number}>
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item, index) => {
        return (
          <div key={index} onClick={() => onClick(item)}>
            {item as ReactNode}
          </div>
        )
      })}
    </div>
  )
}
