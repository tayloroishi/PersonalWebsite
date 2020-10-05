import React from 'react';
import GridTable from '../components/GridTable';
import MyLink from '../components/MyLink';
import TableHeader from '../components/TableHeader';
import TwoColumn from '../components/TwoColumn';
import ttwlogo from '../images/ttw.png'
import unswlogo from '../images/unsw.png'
import oneeightylogo from '../images/180.jpg'
import '../css/main.css'

const ExpDate = ({children}) => (
    <span style={{justifySelf: 'center'}}>{children}</span>
  )

function Experience() {

    return (
        <div className='pagecontainer'>
            <div className='textcontainer'>
                <h1 className='main-title'>Experience</h1>
                <GridTable cols='2fr 5fr 1fr' gap='10px'>
                    <TableHeader start={1} end={5}>
                        <MyLink target='_blank' url='https://www.ttw.com.au/'>
                            Taylor Thomson Whitting
                        </MyLink>
                    </TableHeader>
                    <span>Structural Engineer</span>
                    <span>Designed the structural components of various projects from aquatic centres to hospitals. I have also helped develop in-house software tools for structural design predominatly using C#.</span>
                    <ExpDate>2019 - Present</ExpDate>
                    <span style={{gridRow: 'span 2', height: 'fit-content', textAlign: 'center', alignSelf: 'center', maxWidth: '200px'}}><img className='logo' src={ttwlogo}/></span>
                    <TableHeader start={1} end={5}>
                    <MyLink target='_blank' url='https://www.unsw.edu.au/'>
                        University of New South Wales
                    </MyLink>
                    </TableHeader>
                    <span>Casual Academic</span>
                    <span>Tutored the following courses through multiple semesters:
                    <TwoColumn 
                    info1=
                    {
                    <ul>
                        <li >Mechanics of Solids</li>
                        <li >Autocad </li>
                        <li >Wastewater</li>
                    </ul>
                    }
                    info2=
                    {
                    <ul>
                        <li >Engineering Mechanics</li>
                        <li >Soil Mechanics</li>
                        <li >Water Resources</li>
                    </ul>
                    }/>
                    </span>
                    <ExpDate>2017 - 2019</ExpDate>
                    <span style={{gridRow: 'span 2', height: 'fit-content', textAlign: 'center', alignSelf: 'center', maxWidth: '200px'}}><img className='logo' src={unswlogo}/></span>
                    <TableHeader start={1} end={5}>
                    <MyLink target='_blank' url='https://180dc.org/'>
                        180 Degrees
                    </MyLink>
                    </TableHeader>
                    <span>Consultant</span>
                    <span>Helped non-profit organisations develop their business strategies as well as try to help quantify the impace of social ventures.</span>
                    <ExpDate>2019 - 2019</ExpDate>
                    <span style={{gridRow: 'span 2', height: 'fit-content', textAlign: 'center', alignSelf: 'center', maxWidth: '200px'}}><img className='logo' src={oneeightylogo}/></span>
\
                </GridTable>
            </div>
        </div>
    )
}

export default Experience;