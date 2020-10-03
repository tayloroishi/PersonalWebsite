import React, { Component } from 'react';
import './Main.css';
import Navigation from './Navigation';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';

function About() {
    return (
        <div>
            <div className="InfoPage">
                <h2 className='Header'>Hi there, it is great to meet you !</h2>
                <p className='Blurb'>
                I am a 24 and currently a student in information technology and working full time as a structural engineer. Having moved from the relaxed hippy town, Byron Bay, to the global city of Sydney, I wish to take part in society's continual progression to a sustainable future and its technological advances. 
                </p>
            </div>
            <Navigation/>
        </div>
    );
}

export default About;
