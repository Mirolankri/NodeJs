import React from 'react'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button'

const ChildPropTypeError = ({string,number,boolean,obj,array,cb}) => {
  return (
    <Button variant="outlined" color="primary">
      {string}
    </Button>
  )
}

ChildPropTypeError.propTypes = {
    string:PropTypes.string.isRequired,
    number:PropTypes.number.isRequired,
    boolean:PropTypes.bool.isRequired,
    obj:PropTypes.object.isRequired,
    array:PropTypes.array.isRequired,
    cb:PropTypes.func.isRequired,
}

export default ChildPropTypeError