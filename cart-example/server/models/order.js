module.exports = mongoose.model('Order', new mongoose.Schema({
        customerid: Number,
        amount: Number,
  }));