const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  body: {
    type: String
  },
  labels: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BlogLabel'
  }]
}, {
  timestamps: true
})

module.exports = mongoose.model('Blog', schema)