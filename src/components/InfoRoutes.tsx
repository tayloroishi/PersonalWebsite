import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import About from "../pages/About";
import MainInfoPage from "../app/MainInfoPage";
import history from './history';
import Experience from '../pages/Experience';
import Education from '../pages/Education';
import Skills from '../pages/Skills';
import Resume from '../pages/Resume';

class InfoRoutes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/Info" exact render={() => <MainInfoPage />} />
                    <Route path="/Info/About" render={() => <About />} />
                    <Route path="/Info/Experience" render={() => <Experience />} />
                    <Route path="/Info/Education" render={() => <Education />} />
                    <Route path="/Info/Skills" render={() => <Skills />} />
                    <Route path="/Info/Resume" render={() => <Resume />} />
                </Switch>
            </Router>
        )
    }
}

export default InfoRoutes;

