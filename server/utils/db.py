"""
# Author: Cungen
# Created Time: 2015-35-24 07:35:18

# File Name: db.py
# Description: A handler class for mongodb.

"""

# coding=utf-8

from pymongo import MongoClient

from server.config import Config

class DB(object):
    """ Mongodb handler class
    """

    @staticmethod
    def getCollection(collection):
        client = MongoClient('localhost', Config.db_port)
        db = client[Config.db_name]
        return db[collection]
