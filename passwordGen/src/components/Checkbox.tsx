import React from 'react'

interface PropTypes{
  value:any,
  onChange:any
}



function Checkbox({value,onChange}:PropTypes) {
  return (
    <div>
      <input type="checkbox" checked={value} onChange={onChange} />
    </div>
  )
}

export default Checkbox