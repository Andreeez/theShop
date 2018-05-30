module.exports = mongoose.model('Product', new mongoose.Schema({
  name: {type: String, required: true},
  description: String,
  category: Number,
  image: String,  
  price: Number,
  vat: Number,
  artnr: {type: String, unique: true}
}));
