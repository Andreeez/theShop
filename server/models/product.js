module.exports = mongoose.model('Product', new mongoose.Schema({
  name: {type: String, required: true},
  description: String,
  categories: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Category' }],
  image: String,  
  price: Number,
  vat: Number,
  artnr: {type: String, unique: true}
}));