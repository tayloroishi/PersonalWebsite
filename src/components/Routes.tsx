import React, { Component } from "react";
import { Router, Switch, Route} from "react-router-dom";

// import { history } from "react-router-hash-history";

import About from "../pages/About";
import Home from "../pages/Home";
import history from './history';
import MainInfoPage from "../app/MainInfoPage";

class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path={ process.env.PUBLIC_URL + "/" } exact render={() => <Home />} />
                    <Route path={ process.env.PUBLIC_URL + "/Info" } render={() => <MainInfoPage />}/>
                    <Route path={ process.env.PUBLIC_URL + "/About" } render={() => <About />}/>
                </Switch>
            </Router>
        )
    }
}

export default Routes;
