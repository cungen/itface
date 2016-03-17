"""
# Author: Cungen
# Created Time: 2016-09-08 10:09:34

# File Name: config.py
# Description: Server configuration

"""

import os

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

class Config(object):
    """ Static config class
    """

    # app config
    app_port = 9888
    static_path = os.path.join(ROOT, 'dist')

    # db config
    db_port = 27090
    db_dir = os.path.join(ROOT, 'data/db0')
    db_name = 'cg_itface'
