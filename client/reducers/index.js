import { combineReducers } from 'redux';
import { routerReducer as routing } from 'react-router-redux';
import ActionTypes from '../constants/ActionTypes';

function projects(state = [], action) {
    switch (action.type) {
        case ActionTypes.P_RECEIVE:
            return action.projects;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    projects,
    routing
});

export default rootReducer;
