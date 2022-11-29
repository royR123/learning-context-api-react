import { createContext, useState } from 'react'

export const CounterContext = createContext(null)

export const CounterProvider = (props) => {
  const [count,setCount] = useState(0);
  return (
    <CounterContext.Provider value = {{ count , setCount }}>// here the value which are accessed by other components , when they access the counter context.
      {props.children}
    </CounterContext.Provider>
  )
}
