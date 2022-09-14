require('module-alias/register');
require('dotenv').config();
const express = require('express');

const app = express();

/** Serve static files */
app.use('/assets', express.static('static'))

/** Loaders  **/
require('./loader');

/** routes **/
require('./routes/routes')(app);

app.listen(process.env.PORT, (error) => {
	if (!error) {
		console.log('Running server on port: '+process.env.PORT);
	} else {
		console.error('Error, failed to start server');
	}
});
