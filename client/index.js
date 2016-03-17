import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, IndexRedirect, hashHistory } from 'react-router';
import injectTapEventPlugin from 'react-tap-event-plugin';

import App from './app';
import Index from './components/index/index';
import Add from './components/add/add';
import Project from './components/project/project';

injectTapEventPlugin();

render((
    <Router history={hashHistory}>
        <Route path='/' component={App} >
            <IndexRedirect to='/index' />
            <Route path="index" component={Index} />
            <Route path="add" component={Add} />
            <Route path="project/:pId" component={Project} />
        </Route>
    </Router>
), document.getElementById('root'));