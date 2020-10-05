import React from 'react'
import '../css/gridtable.css'

const GridTable = ({children, cols, gap}) => (
  <div className='grid-table' style={{gridTemplateColumns: cols, gridGap: gap}}>
    {children}
  </div>
)

GridTable.defaultProps = {
  gap: '0'
}
export default GridTable