"""
# Author: Cungen
# Created Time: 2015-27-25 09:27:38

# File Name: json_util.py
# Description: utilities class for json

"""

# coding=utf-8

import json
from bson import ObjectId

class JSONEncoder(json.JSONEncoder):
    def default(self, o):
        if isinstance(o, ObjectId):
            return str(o)
        return json.JSONEncoder.default(self, o)
