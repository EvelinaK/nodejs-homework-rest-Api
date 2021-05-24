const mongoose = require('mongoose');
const { Schema } = mongoose;

const contactsSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
    },
    phone: {
      type: String,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    features: {
      type: Array,
      set: data => (!data ? [] : data),
    },
    owner: { name: String, phone: String, adress: String },
  },
  { versionKey: false, timestamps: true },
);
const Contact = mongoose.model('contact', contactsSchema);

module.exports = Contact;
