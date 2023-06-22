import React, { useReducer } from 'react'

type ReducerState = {
  count: number,
  numOfCount: number
}

type DispatchType = {
  INCREASE: 'increase',
  DECREASE: 'decrease'
}

type UpdateAction = {
  type: 'increase' | 'decrease' | DispatchType,
  payload: number
}

const DISPATCH_TYPE:DispatchType = {
  INCREASE: 'increase',
  DECREASE: 'decrease'
}

const initialState = { count: 0, numOfCount: 0}

function reducer(state: ReducerState, action: UpdateAction) {
  switch (action.type) {
    case DISPATCH_TYPE.INCREASE:
      return { count: state.count + action.payload, numOfCount: state.numOfCount + 1}
    case DISPATCH_TYPE.DECREASE:
      return { count: state.count - action.payload, numOfCount: state.numOfCount + 1}
    default:
      return state
  }
}


export default function Test() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <p>Number of Count: {state.numOfCount}</p>
      <button onClick={() => dispatch({ type: DISPATCH_TYPE.INCREASE, payload: 1})}>+</button>
      <button onClick={() => dispatch({ type: DISPATCH_TYPE.DECREASE, payload: 1})}>-</button>
    </div>
  )
}
