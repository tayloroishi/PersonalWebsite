import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

// import { history } from "react-router-hash-history";

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
                    <Route path={ process.env.PUBLIC_URL + "/Info"} exact render={() => <MainInfoPage />} />
                    <Route path={ process.env.PUBLIC_URL + "/Info/About"} render={() => <About />} />
                    <Route path={ process.env.PUBLIC_URL + "/Info/Experience"} render={() => <Experience />} />
                    <Route path={ process.env.PUBLIC_URL + "/Info/Education"} render={() => <Education />} />
                    <Route path={ process.env.PUBLIC_URL + "/Info/Skills"} render={() => <Skills />} />
                    <Route path={ process.env.PUBLIC_URL + "/Info/Resume"} render={() => <Resume />} />
                </Switch>
            </Router>
        )
    }
}

export default InfoRoutes;

