const mongoose = require('mongoose')
const schema = new mongoose.Schema({
  label: {
    type: String
  }
})
/* 添加虚拟字段 */
schema.virtual('blogList', {
  ref: 'Blog',
  localField: '_id',
  foreignField: 'labels',
  justOne: false /* 查出的数据是不是一条，false表示不是一条 */
})

module.exports = mongoose.model('BlogLabel', schema)