const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  title: {
    type: String
  },
  description: {
    type: String
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'AdminUser'
  },
  body: {
    type: String
  },
  html: {
    type: String
  },
  count: {
    type: Number,
    default: 0
  },
  labels: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'BlogLabel'
  }]
}, {
  timestamps: true
})

/* 添加虚拟字段 */
schema.virtual('comments', {
  ref: 'Comments',
  localField: '_id',
  foreignField: 'blogId',
  justOne: false /* 查出的数据是不是一条，false表示不是一条 */
})


module.exports = mongoose.model('Blog', schema)