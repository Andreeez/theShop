const express = require('express');
const app = express();
const bodyParser = require('body-parser');

global.mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/express_basic_rest_crud');
app.use(bodyParser.json());

// MODELS
const Product = require('./models/product.js');

// ROUTES

// serve frontend files
app.use(express.static( '../basic-vue-app/'));

// REST routes (backend routes)

// get products
app.get('/rest/products', async(req, res)=>{
  let products = await Product.find();
  res.json(products);
});

// get one product
app.get('/rest/products/:id', async(req, res)=>{
  let product = await Product.findOne({_id: req.params.id});
  res.json(product);
});

// create a product
app.post('/rest/products', async(req, res)=>{
  let product = await new Product(req.body);
  product.save();
  res.json(product);
});

// update a product
app.put('/rest/products/:id', async(req, res)=>{
  // get the product from the db
  let product = await Product.findOne({_id: req.params.id});
  // perform update
  let result = await product.update(req.body);
  if(result.ok){
    result = req.body;
  }
  res.json(result);
});

// delete a product
app.delete('/rest/products/:id', async (req, res)=>{
  let result = await Product.deleteOne({_id: req.params.id});
  res.json(result);
});

app.listen('3000', ()=>{
  console.log('The rest example server is running on port 3000');
});
