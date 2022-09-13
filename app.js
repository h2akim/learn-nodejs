require('module-alias/register');
require('dotenv').config();
const express = require('express');

const app = express();

require('./loader');

/** Load routes **/
require('./routes/routes')(app);

app.listen(process.env.PORT, (error) => {
	if (!error) {
		console.log('Running server on port: '+process.env.PORT);
	} else {
		console.error('Error, failed to start server');
	}
});
