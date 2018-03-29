import {HashRouter, Route,Switch,Redirect} from  'react-router-dom';
import React from 'react';
import Welcome from "./components/welcome.jsx";
import AllUsers from "./components/allUsers.jsx";
import Whoops404 from "./components/whoops404.jsx";

class RouteConfiguration extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
                <HashRouter>
                        <Switch>
                            <Redirect exact from="/" to ="/welcome"/>
                            <Route exact path="/welcome" component={Welcome}/>
                            <Route exact path="/all-users" component={AllUsers}/>
                            <Route component={Whoops404} />
                        </Switch>
                </HashRouter>
            );

    }
}

export default RouteConfiguration
