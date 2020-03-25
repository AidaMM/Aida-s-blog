module.exports = app => {
  const adminUser = require("../models/AdminUser");
  const assert = require('http-assert')
  const jwt = require('jsonwebtoken')
  return async (req, res, next) => {
    const token = String(req.headers.authorization || '').split(' ').pop();
    assert(token, 401, '请先登录');
    const {
      id
    } = jwt.verify(token, req.app.get('secret'))

    assert(id, 401, '请先登录')
    req.app.id = id;
    const user = await adminUser.findById(id);
    assert(user, 401, '请先登录')
    next()
  }
}