"""
# Author: Cungen
# Created Time: 2015-04-23 10:04:52

# File Name: routes.py
# Description: decorate class for route

"""

# coding=utf-8

import tornado.web

from server.config import Config

class route(object):
    """decorates RequestHandlers and builds up a list of routables handlers.

    Example
    -------
    @route('/some/path')
    class SomeRequestHandler(RequestHandler):
        pass

    @route('/some/path', name='other')
    class SomeOtherRequestHandler(RequestHandler):
        pass

    my_routes = route.get_routes()
    """

    _routes = [
        (r'/', tornado.web.RedirectHandler, {'url': '/index.html'}),
        (r'/(index.html)', tornado.web.StaticFileHandler, {'path': Config.static_path}),
        (r'/dist/(.*)', tornado.web.StaticFileHandler, {'path': Config.static_path}),
    ]

    def __init__(self, uri, name=None):
        self._uri = uri
        self.name = name

    def __call__(self, _handler):
        """gets called when we class decorate"""
        name = self.name and self.name or _handler.__name__
        self._routes.append(tornado.web.url(self._uri, _handler, name=name))
        return _handler

    @classmethod
    def get_routes(self):
        return self._routes

def route_redirect(from_, to, name=None):
    route._routes.append(tornado.web.url(from_, tornado.web.RedirectHandler, dict(url=to), name=name))
