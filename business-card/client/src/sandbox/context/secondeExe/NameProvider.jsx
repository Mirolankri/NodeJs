import React,{useContext,useState,useEffect} from 'react'
import {node} from 'prop-types'

const NameContext = React.createContext(null)
export const NameProvider = ({children}) => {
    const [Name,setName] = useState("")

    useEffect(()=>{
        setName("Miro")
    },[])
  return <NameContext.Provider value={{Name,setName}}>
    {children}
  </NameContext.Provider>
}

export const useName = ()=>{
    const context = useContext(NameContext)
    if(!context) throw new Error("useName Must be used within a NameProvider")
    return context
}

NameProvider.propTypes = {
    children:node.isRequired
}

// export default NameProvider