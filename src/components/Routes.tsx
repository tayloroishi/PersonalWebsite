import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import About from "../pages/About";
import Home from "../pages/Home";
import history from './history';
import MainInfoPage from "../app/MainInfoPage";

class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact render={() => <Home />} />
                    <Route path="/Info" render={() => <MainInfoPage />}/>
                    <Route path="/About" render={() => <About />}/>
                </Switch>
            </Router>
        )
    }
}

export default Routes;
