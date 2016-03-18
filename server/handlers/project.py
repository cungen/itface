"""
# Author: Cungen
# Created Time: 2016-47-16 07:47:52

# File Name: project.py
# Description:

"""

# coding=utf-8

from base import BaseHandler
from server.utils.routes import route
from server.utils.db import DB
from server.utils.json_util import JSONEncoder

@route('/b/project', 'projectList')
@route('/b/project/(.*)$', 'projectItem')
class ProjectHandler(BaseHandler):
    """ A url handler for project model resource.
    """

    def get(self, *args, **kwargs):
        """
        :return: json object of project list
        """
        if len(args):
            projectId = args[0]
            collection = DB.getCollection('project')
            self.set_header('Content-Type', 'application/json; charset=UTF-8')
            self.finish(JSONEncoder().encode([dict(x) for x in collection.find()]))
        else:
            collection = DB.getCollection('project')
            self.set_header('Content-Type', 'application/json; charset=UTF-8')
            self.finish(JSONEncoder().encode([dict(x) for x in collection.find()]))
