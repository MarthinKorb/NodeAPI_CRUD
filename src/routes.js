const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

//Criamos a rota
    routes.get("/products", ProductController.index);

    routes.post("/products", ProductController.Create);

    routes.get('/products/:id', ProductController.Show);

    routes.put('/products/:id', ProductController.Update);

    routes.delete('/products/:id' , ProductController.Delete);


module.exports = routes;