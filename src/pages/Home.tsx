import React, { Component } from 'react';
import '../css/home.css';
import '../css/dropdown.css';
import history from '../components/history';

function Home() {
    return (
      <div className="homepage">
        <div className = "wrap">
          <h1 className = "intro">
            Hi there! 
          </h1>
          <h1 className = "intro2">
            My name is Taylor Oishi and I am a software engineer in training.
          </h1>
        </div>
        <h1 className = "info"> Find out more about me! &#8594;</h1>
        <MapButton/>
        <GitHubButton/>
        <LinkedInButton/>
        <DropDown/>
      </div>
    );
}

function MapButton(){
  return (
    <button className="mapbtn" 
    type="button"
    onClick={(e) => {
      e.preventDefault();
      window.open('https://goo.gl/maps/WNpJz6ga6xHirt2N7');
      }}
    > Glacier National Park, Montana, USA</button>
  )
}

function LinkedInButton(){
  return (
    <button className="linkedinbtn" 
    type="button"
    onClick={(e) => {
      e.preventDefault();
      window.open('https://www.linkedin.com/in/taylor-oishi/');
      }}
    />
  )
}

function GitHubButton(){
  return (
    <button className="githubbtn" 
    type="button"
    onClick={(e) => {
      e.preventDefault();
      window.open('https://github.com/tayloroishi');
      }}
    />
  )
}


class DropDown extends Component<{}, { showMenu: boolean}>{
  constructor(props) {
    super(props);
    this.state = {showMenu: false};
    
    this.showMenu = this.showMenu.bind(this);
    // this.closeMenu = this.closeMenu.bind(this);

  }

  showMenu(event) {
    event.preventDefault();

    if (this.state.showMenu) {
      this.setState({
        showMenu: false
      });
    }
    else {
      this.setState({
        showMenu: true
      });
    }

    // const button = document.getElementById('content');
    // button.addEventListener('click', function() {
    //   this.classList.toggle('clicked')
    // });
    // document.documentElement.classList.toggle('change');
    // this.setState({ showMenu: true }, () => {
    //   document.addEventListener('click', this.closeMenu);
    // });
  }

  // closeMenu(){
  //   this.setState({ showMenu: false }, () => {
  //     document.removeEventListener('click', this.closeMenu);
  //     // myFunction('content'); 
  //   });
  // }

  render() {
    return (
      <div className="menu">
          <div id="content" className="container" onClick={(event) => { 
            myFunction('content'); 
            this.showMenu(event); 
          }}>
            <div className="bar1"></div>
            <div className="bar2"></div>
            <div className="bar3"></div>
          </div>
          
          {
            this.state.showMenu
              ? (
              <div className="dropdowncontent">
                <button className = "b" onClick={() => history.push('/Info/About')}> About Me </button>
                <button className = "b" onClick={() => history.push('/Info/Experience')}> Experience </button>
                <button className = "b" onClick={() => history.push('/Info/Education')}> Education / Awards </button>
                <button className = "b" onClick={() => history.push('/Info/Skills')}> Technical Skills </button>
                <button className = "b" onClick={() => history.push('/Info/Resume')}> Resume / Contact </button>
              </div>
              )
              : (
                null
              )
            }
      </div>
    )
  }
}

function myFunction(x: string) {
  const el = document.getElementById(x);
  if (el) {
    el.classList.toggle('change');
  }
}

export default Home;
