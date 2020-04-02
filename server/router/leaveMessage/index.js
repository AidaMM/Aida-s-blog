module.exports = app => {
  const express = require("express");
  const leaveMessage = require("../../models/LeaveMessage");
  const auth = require('../../middleware/auth.js')

  const router = express.Router({
    mergeParams: true
  });
  router.post("/addLeaveMessage", async (req, res) => {
    const model = await leaveMessage.create(req.body);
    res.send(model);
  })
  router.get("/listLeaveMessage", async (req, res) => {
    const model = await leaveMessage.find().sort({
      updatedAt: 1
    });
    res.send(model);
  })
  router.delete("/delLeaveMessage/:id", async (req, res) => {
    const id = req.params.id
    const model = await leaveMessage.findByIdAndDelete(id);
    res.send({
      success: true
    });
  })
  app.use("/ly/api", auth(), router)
  app.use("/ly/web/api", router)
};