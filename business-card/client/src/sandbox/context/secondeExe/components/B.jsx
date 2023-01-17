import React from 'react'
import C from './C'
import useName from '../../../custom-hooks/useName'
const B = () => {
    const {name} = useName()
  return (
    <>
    <div>in B component{name}</div>
    <C/>
    </>
  )
}

export default B