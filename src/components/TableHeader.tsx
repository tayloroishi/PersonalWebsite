import React from 'react';

const TableHeader = ({children, start, end}) => (
  <div className='header' style={{gridColumnStart: start, gridColumnEnd: end}}>
    {children}
  </div>
)

export default TableHeader;