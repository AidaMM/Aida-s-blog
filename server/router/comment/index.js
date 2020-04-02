module.exports = app => {
  const express = require("express");
  const comment = require("../../models/Comment");
  const auth = require('../../middleware/auth.js')
  const router = express.Router({
    mergeParams: true
  });
  router.post("/addComment", async (req, res) => {
    const model = await comment.create(req.body);
    res.send(model);
  })
  router.get("/listComment", async (req, res) => {
    const model = await comment.find().sort({
      updatedAt: 1
    });
    res.send(model);
  })
  router.delete("/delCommentById/:id", async (req, res) => {
    const id = req.params.id
    const model = await comment.findByIdAndDelete(id);
    res.send({
      success: true
    });
  })

  app.use("/ly/api", auth(), router)
  app.use("/ly/web/api", router)
};