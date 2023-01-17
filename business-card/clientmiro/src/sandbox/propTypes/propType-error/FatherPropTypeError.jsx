import React from 'react'
import ChildPropTypeError from './ChildPropTypeError'

const FatherPropTypeError = () => {
  return (
    <ChildPropTypeError string="Miros" number={4} boolean={false} obj={{}} array={[]} cb={()=>{}}/>
  )
}

export default FatherPropTypeError