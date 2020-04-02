const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  name: {
    type: String
  },
  content: {
    type: String
  },
  blogId:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Blog'
  }
}, {
  timestamps: true
})
module.exports = mongoose.model('Comments', schema)