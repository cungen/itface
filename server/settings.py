import os
import logging
import tornado
from tornado.options import define, options

from server.config import Config

# Make file path relative to settings.
dirname = os.path.dirname
ROOT = dirname(dirname(os.path.abspath(__file__)))

define('port', default=Config.app_port, help='run on the given port', type=int)
define('config', default=None, help='tornado config file')
define('debug', default=False, help='debug mode')
tornado.options.parse_command_line()

STATIC_ROOT = os.path.join(ROOT, 'client')

class DeploymentType:
    PRODUCTION = 'PRODUCTION'
    DEV = 'DEV'
    SOLO = 'SOLO'
    STAGING = 'STAGING '
    dict = {
        PRODUCTION : 1,
        DEV : 2,
        SOLO : 3,
        STAGING : 4
    }

if 'DEPLOYMENT_TYPE' in os.environ:
    DEPLOYMENT = os.environ['DEPLOYMENT_TYPE'].upper()
else:
    DEPLOYMENT = DeploymentType.SOLO

settings = {}
settings['debug'] = DEPLOYMENT != DeploymentType.PRODUCTION or options.debug
settings['static_path'] = STATIC_ROOT
settings['cookie_secret'] = 'there should be someone'
settings['xsrf_cookies'] = False

SYSLOG_TAG = 'cg'
SYSTEM_FACILITY = logging.handlers.SysLogHandler.LOG_LOCAL2

LOGGERS = {
    'loggers': {
        'cg': {},
    },
}

if settings['debug']:
    LOG_LEVEL = logging.DEBUG
else:
    LOG_LEVEL = logging.INFO
USE_SYSLOG = DEPLOYMENT != DeploymentType.SOLO

if options.config:
    tornado.options.parse_config_file(options.config)
