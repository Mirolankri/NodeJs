import React from 'react'
import B from './B'
import NameProvider from '../NameProvider'
const A = () => {
  return (
    <NameProvider>
    <div>in A component</div>
    <B/>
    </NameProvider>
  )
}

export default A