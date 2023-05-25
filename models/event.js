const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const eventSchema = new Schema(
  {
    // Define your event schema fields here
    name: { type: String, required: true },
    description: { type: String, required: true },
    teacher: { type: String, required: true }
  },
  {
    collection: 'Events' // Specify the collection name
  }
);

module.exports = mongoose.model('Event', eventSchema);
