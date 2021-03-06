const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
  itemIds: [String],
  totalCost: Number
});

module.exports = mongoose.model('Order', orderSchema);