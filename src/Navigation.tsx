import React from 'react';
import './Main.css'

function Navigation() {
    return (
        <div className="UIPanel">
            <div className="DisplayProfile"/>
            <div className = "ButtonContainer">
                <button className = "NavButton" type="button" disabled> About Me </button>
                <button className = "NavButton"> Experience </button>
                <button className = "NavButton"> Education </button>
                <button className = "NavButton"> Skills </button>
                <button className = "NavButton"> Resume </button>
            </div>
        </div>
    )
}

export default Navigation;