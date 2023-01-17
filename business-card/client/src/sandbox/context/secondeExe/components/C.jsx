import React from 'react'
import useName from '../../../custom-hooks/useName'

const C = () => {
    const {name,setName} =useName()
  return (
    <>
    <div>in C component{name}</div>
    <input type="text" onChange={(e)=>{setName(e.target.value)}}/>
    </>
  )
}

export default C