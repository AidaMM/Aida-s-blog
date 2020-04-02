module.exports = app => {
  const express = require("express");
  const adminUser = require("../../models/AdminUser");
  const assert = require('http-assert')
  const jwt = require('jsonwebtoken')
  const auth = require('../../middleware/auth.js')
  const router = express.Router({
    mergeParams: true
  });
  app.post("/ly/login", async (req, res) => {
    const {
      username,
      password
    } = req.body;
    //找用户
    const user = await adminUser.findOne({
      username
    }).select('+password')
    assert(user, 422, '用户不存在');
    const isValid = require('bcrypt').compareSync(password, user.password)
    assert(isValid, 422, '密码错误');
    //返回token

    const token = jwt.sign({
      id: user.id
    }, app.get('secret'));
    res.send({
      token
    })
  });
  router.post("/addUser", async (req, res) => {
    const model = await adminUser.create(req.body);
    res.send(model);
  })
  router.get("/listUser", async (req, res) => {
    const model = await adminUser.find()
    return res.send(model);
  })
  router.get("/findUserById/:id", async (req, res) => {
    const id = req.params.id
    const model = await adminUser.findById(id);
    res.send(model);
  })
  router.put("/updateUserById/:id", async (req, res) => {
    const id = req.params.id
    const model = await adminUser.findByIdAndUpdate(id, req.body);
    res.send(model);
  })
  router.delete("/delUserById/:id", async (req, res) => {
    const id = req.params.id
    const model = await adminUser.findByIdAndDelete(id);
    res.send({
      success: true
    });
  })

  app.use("/ly/api", auth(), router)
  app.use("/ly/web/api", router)
};