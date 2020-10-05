import React from 'react'

const SubHeading = ({title, message}) => (
  <>
    <h2 className='sub-title'>{title}</h2>
    <small>{message}</small>
    <hr/>
  </>
)

export default SubHeading;