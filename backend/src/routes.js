const express = require('express')

const userControler = require('./controllers/userController')
const productController = require('./controllers/productController')

const routes = express.Router()

routes.get('/users', userControler.getAll);
routes.get('/products', productController.getAll);
routes.post('/users/login', userControler.login);
routes.post('/users', userControler.createuser);
routes.post('/products/createproducts', productController.createproducts)


module.exports =  routes