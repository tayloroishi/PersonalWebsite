import React from 'react';

const CourseResult = ({code, note, title, grade}) => (
  <>
    <div>{code}{ note !== '' ? note : <small>{note}</small> }</div>
    <div>{title}</div>
    <div>{grade}</div>
  </>
)

CourseResult.defaultProps = {
  note: ''
}

export default CourseResult;