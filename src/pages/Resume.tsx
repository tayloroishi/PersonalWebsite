import React from 'react'
import GridTable from '../components/GridTable'
import MyLink from '../components/MyLink'

function Resume() {
    return (
        <div className='pagecontainer'>
            <div className='textcontainer'>
                <h1 className='main-title'>Resume / Contact</h1>
                <GridTable cols='1fr 3fr'>
                    <span>E-mail:</span>
                    <span>
                    <MyLink url='mailto:taylor-oishi@hotmail.com'>
                        <i className='fa fa-envelope'></i> taylor-oishi@hotmail.com
                    </MyLink>
                    </span>
                    <span>&nbsp;</span><span/>
                    <span>LinkedIn:</span>
                    <span>
                    <MyLink url='https://www.linkedin.com/in/taylor-oishi/' target='_blank'>
                        <i className='fa fa-linkedin'></i> LinkedIn
                    </MyLink>
                    </span>
                    <span>Github:</span>
                    <span>
                    <MyLink url='https://github.com/tayloroishi' target='_blank'>
                        <i className='fa fa-github'></i> Github
                    </MyLink>
                    </span>
                    <span>Resume:</span>
                    <span>
                    <a href='../pdfs/Resume.pdf' download="resume.pdf">Resume</a>
                    </span>
                </GridTable>
            </div>
        </div>
    )
}

export default Resume