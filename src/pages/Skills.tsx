import React from 'react'
import SubHeading from '../components/SubHeading'
import GridTable from '../components/GridTable'
import Skill from '../components/Skill'
import '../css/main.css'

function Skills() {
    return(
        <div className='pagecontainer'>
            <div className='textcontainer'>
            <h1 className='main-title'>Technical Ability</h1>
            <SubHeading
                title='Software'
                message=''
            />
            <div style={{padding: '50px'}}>
                <h1 className='subsubheading'> Languages: </h1>
                <GridTable cols='1fr 1fr' gap='10px'>
                <Skill stars={5} title='Python'/>
                <Skill stars={4} title='Perl'/>
                <Skill stars={4} title='Bash'/>
                <Skill stars={4} title='C'/>
                <Skill stars={4} title='C#'/>
                <Skill stars={4} title='Java'/>
                <Skill stars={3} title='Javascript'/>
                <Skill stars={2} title='Typescript'/>
                <Skill stars={1} title='Swift'/>
                </GridTable>
                <br/>
                <h1 className='subsubheading'> Stacks: </h1>
                <GridTable cols='1fr 1fr' gap='10px'>
                <Skill stars={5} title='Git'/>
                <Skill stars={4} title='Linux/Command Line'/>
                <Skill stars={3} title='ReactJS'/>
                <Skill stars={2} title='Docker'/>
                </GridTable>
            </div>
            <br/>
            <SubHeading
                title='Structural Engineering'
                message=''
            />
            <div style={{padding: '10px'}}>
                <GridTable cols='1fr 1fr' gap='10px'>
                <Skill stars={5} title='Timber Design'/>
                <Skill stars={4} title='Steel Design'/>
                <Skill stars={4} title='Value Engineering'/>
                <Skill stars={3} title='Concrete Design'/>
                </GridTable>
            </div>
            <br/>
            <SubHeading
                title='Personal Skills'
                message=''
            />
            <div style={{padding: '10px'}}>
                <GridTable cols='1fr 1fr' gap='10px'>
                <Skill stars={5} title='Teamwork'/>
                <Skill stars={5} title='Communication'/>
                </GridTable>
            </div>
            </div>
        </div>  
    )
}

export default Skills;
