import ActionTypes from '../constants/ActionTypes';
import dispatch from '../dispatcher/AppDispatcher';

class ProjectActionClass {
    create(name, url) {
        dispatch(ActionTypes.P_CREATE, {
            name: 'name',
            url: url
        });
    }
}

export default ProjectAction = new ProjectActionClass();