/**
 * ProjectStore
 */

import * as $ from 'jquery';
import { EventEmitter } from 'events';

import { register } from '../dispatcher/AppDispatcher';
import ActionTypes from '../constants/ActionTypes';

const CHANGE_EVENT = 'change';

class ProjectStoreClass extends EventEmitter {
    addChangeListener(cb) {
        this.on(CHANGE_EVENT, cb);
    }

    removeChangeListener(cb) {
        this.removeListener(CHANGE_EVENT, cb);
    }

    async getAll() {
        return await $.ajax('/api/b/project');
    }
}

const ProjectStore = new ProjectStoreClass();

register((payload) => {
    const action = payload.action;

    switch(action.actionType) {
    }
});

export default ProjectStore;

