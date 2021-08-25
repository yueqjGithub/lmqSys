import React, { ReactNode } from "react";
import { reducer } from "./reducer";
import State from './state'

const Context = React.createContext<{ Store: {[key:string]:any}, dispatch: React.Dispatch<any> | undefined}>({
  Store: State,
  dispatch: undefined
})

type Props = {
  children: React.ReactElement,
  [key: string]: any
}

const ContextProvider = (props: Props) => {
  const [Store, dispatch] = React.useReducer(reducer, State)
  const { children } = props
  return (
    <Context.Provider value={{Store, dispatch}}>
      {children}
    </Context.Provider>
  )
}

export { ContextProvider, Context }