const _ = require('lodash');
const path = require('path');

/** dot env */
const env = _.endsWith(process.cwd(), '/server') ? path.resolve(process.cwd(), '.env') : path.resolve(process.cwd(), 'server/.env');
require('dotenv').config({
	'path': env
});

/** module alias */
require('module-alias/register');

/** Load ORM */
require('@load/bookshelf');