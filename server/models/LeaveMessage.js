const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  name: {
    type: String
  },
  content: {
    type: String
  },
  email:{
    type:String,
    select:false
  }
}, {
  timestamps: true
})

module.exports = mongoose.model('LeaveMessage', schema)