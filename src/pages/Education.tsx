import React from 'react'
import SubHeading from '../components/SubHeading'
import GridTable from '../components/GridTable'
import TableHeader from '../components/TableHeader'
import CourseResult from '../components/CourseResult'
import {courses} from '../components/Marks'
import '../css/main.css';


const makeYear = (courses) => {
  return courses.map(object => {
    return (
      <CourseResult
        code={object['code']}
        title={object['title']}
        grade={object['grade']}
        note={
          object['note'] !== undefined ? <small> {object['note']}</small> : ''
        }
      />
    )
  })
}

class Education extends React.Component {

  render() {
    return (
        <div className='pagecontainer'>
            <div className='textcontainer'>
                <h1 className='main-title'>Education</h1>
                <SubHeading
                title='Master of Information Technology (In Progress)'
                message =''
                />
                <GridTable cols='2fr 2fr 1fr' gap='10px'>
                    <TableHeader start={1} end={4}>
                    Courses Completed To Date
                    </TableHeader>
                    {
                    makeYear(courses['all'])
                    }
                </GridTable>
                <br/>
                <SubHeading
                title='Civil with Architecture (First Class Honours)'
                message='Notable Accomplishments:'
                />
                <span>Civil with Architecture Discipline Prize:</span>
                <br/>
                <br/>
                <ul>
                    <li>For best performance in selected undergraduate courses included an Honours Thesis in Civil with Architecture Engineering.</li>
                </ul>
                <br/>
                <span>Thesis Topic:</span>
                <br/>
                <br/>
                <ul>
                    <li>Glued-In-Rod Timber Joints: Development of a Design Standard (Mark - 95) </li>
                </ul>
                <span>Student Exchange:</span>
                <br/>
                <br/>
                <ul>
                    <li>Attended McGill University in Montreal, Canada. </li>
                </ul>
                <br/>
                <span>UNSW Dean's List:</span>
                <br/>
                <br/>
                <span>2016 & 2018</span>
                <SubHeading
                title='Xavier Catholic College (Secondary School)'
                message='School Positions'
                />
                <ul>
                        <li >House Captain</li>
                        <li >St Vincent Depaul Member</li>
                        <li >Leo's Club Member</li>
                </ul>
            </div>
        </div>
    )
  }
}


export default Education;