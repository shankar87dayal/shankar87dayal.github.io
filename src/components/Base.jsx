import React from 'react'
import CustomNavbar from './CoustomNavbar'


function Base({children}) {
  return (
    <div>
        <CustomNavbar />

        {children}



    </div>
  )
}

export default Base