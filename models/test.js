const db = require('./db.js');

module.exports = {
	showList: async () => await db.q('select * from test',[])
}
