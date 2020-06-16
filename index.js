const dbFactory = require('./DB/db')
const serviceFactory = require('./authService/service')
const controllerFactory = require('./authController/controller')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')

const port = process.env.PORT || 8080

app.use(bodyParser.json())

// business logic
//const db = dbFactory('mysql')
//const service = serviceFactory(db, '1234')
//const controller = controllerFactory(service)
const dbname = 'mysql'
const controller = controllerFactory(serviceFactory(dbFactory(dbname)))
//

app.get('/', (req, res) => {
	
	res.status(200).json({ message: "Hello world" })
})

app.post('/login',controller.login)
app.post("/checktoken",controller.checkToken)

app.listen(port)


