/**
 * ProjectStore
 */

import { EventEmitter } from 'events';

import * as $ from 'jquery';
import { register } from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/ActionTypes';
import API from '../utils/api';

const CHANGE_EVENT = 'change';

class ProjectStoreClass extends EventEmitter {
    addChangeListener(cb) {
        this.on(CHANGE_EVENT, cb);
    }

    removeChangeListener(cb) {
        this.removeListener(CHANGE_EVENT, cb);
    }

    async getAll() {
        return await API.get('/api/b/project');
    }
}

const ProjectStore = new ProjectStoreClass();

register((payload) => {
    const action = payload.action;

    switch(action.actionType) {
        case ActionTypes.P_CREATE:
            console.log(action);
            break;
    }
});

export default ProjectStore;

