module.exports = (db) => {
	const service = {}
	service.login = (username, password) => {
		var isUsername = db.username == username
		var isPassword = db.password == password
		if(isUsername && isPassword){
			return db.token
		}
		return ""
	}

	service.checkToken = (token) => {
		var isToken = token == db.token
		if(isToken) return true
		return false
	}

	return service
}
