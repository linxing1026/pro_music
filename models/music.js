const db = require('./db.js')

module.exports = {
	addMusicByObj: async sing => await db.q('insert into musics (title,singer,time,filelrc,file,uid) values (?,?,?,?,?,?)',Object.values(sing)),
//	updateMusic:async music => await db.q('update musics set title=?,singer=?,time=?,filelrc=?,file=?,uid=? where id=?',Object.values(music))
	async updateMusic(music){
		return await db.q(`update musics set title=?,singer=?,time=?,filelrc=?,file=?,uid=? where id=?`,Object.values(music))
	},
	async deleteMusicById(id) {
		return await db.q(`delete from musics where id = ?`,[id])
	},
	findMusicByUid: async uid => await db.q('select * from musics where uid =? ',[uid]),
	findMusicById: async id => await db.q('select * from musics where id =?', [id])
}
