const assert = require('assert')

const dbFactory = require('../DB/db')
const serviceFactory = require('../authService/service')

describe('login test', () => {
	it('login success', () => {
		const service = serviceFactory(dbFactory('mysql'))
		const username = "mysql"
		const password = "mysql"
		const token = service.login(username, password)

		const expected = "1234"
		assert.equal(token, expected)
	})

	it('login fail', () => {
		const service = serviceFactory(dbFactory('mongodb'))
		const username = "mysql"
		const password = "mysql"
		const token = service.login(username, password)

		const expected = "1234"
		assert.notEqual(token, expected)
	})
})

describe('check token test', () => {
	it('check token success', () => {
		const service = serviceFactory(dbFactory('mysql'))
		const token = "1234"
		const status = service.checkToken(token)

		const expected = true
		assert.equal(status, expected)
	})
	it('check token fail', () => {
		const service = serviceFactory(dbFactory('mysql'))
		const token = "2345"
		const status = service.checkToken(token)


		const expected = true
		assert.notEqual(status, expected)
	})
})
