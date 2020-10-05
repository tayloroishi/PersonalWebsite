import React from 'react'

import '../css/mylink.css'

const MyLink = ({url, children, ...other}) => (
  <span>
    <a href={url} className='contact-link' {...other}>
      {children}
    </a>
  </span>
)

export default MyLink;