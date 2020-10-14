const path = require('path');

module.exports = {
	viewDir:path.resolve('./views'),
  	staticDir:path.resolve('./public'),
  	uploadDir:path.resolve('./public/files'),
	appPort: '8888',
	dbConfig: {
		connnectionLimition: 10,
		host			   : 'localhost',
		user		       : 'root',
		password		   : '',
		database		   : 'node_music' 
	}
}
