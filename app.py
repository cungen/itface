#!/usr/bin/env python
import os
import sys

import tornado.httpserver
import tornado.ioloop
import tornado.web
from tornado.options import options

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.append(os.path.dirname(os.path.join(ROOT, 'server')))

from server.settings import settings
from server.utils.routes import route
from server.handlers import *

def main():
    handlers = route.get_routes()
    app = tornado.web.Application(handlers, **settings)
    http_server = tornado.httpserver.HTTPServer(app)
    http_server.listen(options.port)
    print 'Server start at: %s' % options.port
    tornado.ioloop.IOLoop.instance().start()

if __name__ == '__main__':
    main()
