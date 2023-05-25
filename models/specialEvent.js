const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const specialEventSchema = new Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
    teacher: { type: String, required: true }
  },
  {
    collection: 'Special-Events' 
  }
);

module.exports = mongoose.model('SpecialEvent', specialEventSchema);
