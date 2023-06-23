import React from 'react'


/**
 Position prop can be one of 
 "left-center" | "left-top" | "left-bottom" | "center" | "center-top" |
 "center-bottom" | "right-center" | "right-top" | "right-bottom"
 */

type HorizontalPosition = 'left' | 'center' | 'right'
type VerticalPosition = 'top' | 'center' | 'bottom'

type ToastProps = {
  position: Exclude<`${HorizontalPosition}-${VerticalPosition}`, 'center-center'> | 'center'
  // position: `${HorizontalPosition}-${VerticalPosition}` // this is to have all possible combinations of position but center-center is included, so we use exclude version above
}

 
export default function Toast({position}: ToastProps) {
  return (
    <div>Toast Notification Position - {position}</div>
  )
}
 