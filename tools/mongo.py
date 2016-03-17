#!/usr/bin/env python
# coding=utf-8

import os
import sys
from argparse import ArgumentParser

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.append(os.path.dirname(os.path.join(ROOT, 'server')))

from server.config import Config

if __name__ == '__main__':
    def getArguments():
        """ Get arguments
        """
        parser = ArgumentParser('启动Mongodb并添加测试数据')
        parser.add_argument('--dir', dest='dir', default=Config.db_dir, help='mongodb data directory')
        parser.add_argument('--port', dest='port', default=Config.db_port, help='mongodb port')
        return parser.parse_args()

    args = getArguments()
    if not os.path.isdir(args.dir):
        os.makedirs(args.dir)
    os.system('mongod --port %d --dbpath %s' % (args.port, args.dir))
