module.exports = mongoose.model('Order', new mongoose.Schema({
        customer:{ type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        result: mongoose.Schema.Types.Mixed,
        cartData: mongoose.Schema.Types.Mixed
  }));

  