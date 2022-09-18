require('module-alias/register');
const _ = require('lodash');
const path = require('path');
const config = require('@config/general');

/** Load ORM */
require('@load/bookshelf');

/** dot env */
require('dotenv').config({
	'path': config.env_file
});