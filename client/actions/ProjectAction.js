import ActionTypes from '../constants/ActionTypes';
import * as $ from 'jquery';

function requestProjects() {
    return {
        type: ActionTypes.P_REQUEST
    }
}

/**
 * action after receive projects
 * @param  {Object[]} projects - object list
 * @return {Object}            - action object
 */
function receiveProjects(projects) {
    return {
        type: ActionTypes.P_RECEIVE,
        projects: projects
    }

}

export function fetchProjects() {
    return dispatch => {
        dispatch(requestProjects());
        return $.get('../api/b/project').then(resp => dispatch(receiveProjects(resp)) )
    }
}
