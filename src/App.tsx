import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <main>
      <Switch>
        <div className="MainPage">
          <div className = "Wrap">
            <h1 className = "Intro">
              Hi there! 
            </h1>
            <h1 className = "Intro2">
              My name is Taylor Oishi and I am a software engineer in training.
            </h1>
          </div>
        </div>
      </Switch>
    </main>
  );
}

export default App;
