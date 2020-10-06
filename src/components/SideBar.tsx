import React, { Component } from 'react';
import NavLink from './NavLink';
import history from './history';
import '../css/main.css';

interface SideBarState {
    activePath: string;
}

const about = '/Info/About';
const experience = '/Info/Experience';
const education = '/Info/Education';
const skills = '/Info/Skills';
const resume = '/Info/Resume';

class SideBar extends Component<{}, SideBarState> {
    constructor(props){
        super(props);
        this.state = {activePath: window.location.pathname};
    }

    handleClick = (path) => {
        this.setState({activePath: path});
        history.push(process.env.PUBLIC_URL + path);
    }

    render() {
        return (
            <div className="uipanel">
                <div className="displayprofile"/>
                <div className = "buttoncontainer">
                    <NavLink path={about} handleClick={this.handleClick} name='About Me' active={about === this.state.activePath}/>
                    <NavLink path={experience} handleClick={this.handleClick} name='Experience' active={experience === this.state.activePath}/>
                    <NavLink path={education} handleClick={this.handleClick} name='Education / Awards'active={education === this.state.activePath}/>
                    <NavLink path={skills} handleClick={this.handleClick} name='Skills'active={skills === this.state.activePath}/>
                    <NavLink path={resume} handleClick={this.handleClick} name='Resume / Contact' active={resume === this.state.activePath}/>
                </div>
                <button className = "backbtn" onClick={() => history.push(process.env.PUBLIC_URL + '/')}/>
            </div>
        )
    }
}

export default SideBar;