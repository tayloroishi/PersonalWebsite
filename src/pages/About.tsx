import React, { Component } from 'react';
import '../css/main.css';
import '../css/home.css';

function About() {
    return (
      <div>
          <div className="infopage">
              <MapButton/>
              <h2 className='topline'>Hi there, it is great to meet you !</h2>
              <p className='blurb'>
              I am a 24 and currently a student in information technology and working full time as a structural engineer. Having moved from the relaxed hippy town, Byron Bay, to the global city of Sydney, I wish to take part in society's continual progression to a sustainable future and its technological advances. 
              </p>
          </div>
      </div>
    );
}

function MapButton(){
    return (
      <button className="mapbtn" 
      type="button"
      onClick={(e) => {
        e.preventDefault();
        window.open('https://goo.gl/maps/mv7y6eNuyawZrGyo6');
        }}
      > Engleberg, Switzerland</button>
    )
  }

export default About;
