import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app';
import Index from './components/index/index';
import Project from './components/project/project';
import Add from './components/add/add';

export default (
    <Route path='/' component={App}>
        <IndexRoute component={Index} />
        <Route path='project/:projectId' component={Project} />
        <Route path='add' component={Add} />
    </Route>
)
