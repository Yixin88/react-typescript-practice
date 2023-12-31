import React from 'react'

type RandomNumberType = {
  value: number
}

type PositiveNumber = RandomNumberType & {
  isPositive: boolean,
  isNegative?: never,
  isZero?: never
}

type NegativeNumber = RandomNumberType & {
  isNegative: boolean,
  isPositive?: never,
  isZero?: never
  
}

type Zero = RandomNumberType & {
  isZero: boolean,
  isPositive?: never,
  isNegative?: never
}

type RandomNumberProps = PositiveNumber | NegativeNumber | Zero //by setting the top types, we can say that value is needed but the other 3 props will depend, if isPositive is passed in, the rest is restricted to be passed in

export default function RandomNumber({value, isPositive, isNegative, isZero}: RandomNumberProps) {
  return (
    <div>
      {value} {isPositive && 'positive'} {isNegative && 'negative'}{' '}
      {isZero && 'zero'}
    </div>
  )
}
