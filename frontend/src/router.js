import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Logo from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncidents from './pages/NewIncidents';

function Routes(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logo} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/incidents/new" component={NewIncidents} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;