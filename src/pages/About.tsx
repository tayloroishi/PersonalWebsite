import React, { Component } from 'react';
import '../css/main.css';
import '../css/home.css';

function About() {
    return (
      <div>
          <div className="infopage">
              <MapButton/>
              <div className='textcontainer'>
                <h2 className='topline'>Just a little bit about me...</h2>
                <p className='blurb'>
                I am 25 and currently enrolled in a Master's of Information Technology. After 2 years working as a structural engineer, I have had a change of heart. 
                </p>
                <p className='blurb'>
                It always fascinated me how easily one can create and implement software right in front oneself. The ability to see the final product within minutes of compiling a piece of code is quite invigorating and is what ultimately lead me to pursue a career in software engineering. 
                </p>
                <p className='blurb'>
                Currently I am insanely busy with work and uni, but in my free time I like to hike, travel, surf, cook and catch up with friends/colleagues. 
                </p>
            </div>
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
