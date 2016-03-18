import * as $ from 'jquery';

export default class API {

    static get(req) {
        const defer = $.Deferred();
        $.get(req).done((data) => {
            defer.resolve(data);
        }).fail((err) => {
            defer.reject(err);
        });
        return defer.promise();
    }
}