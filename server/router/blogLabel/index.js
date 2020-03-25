module.exports = app => {
  const express = require("express");
  const blogLabel = require("../../models/BlogLabel");
  const auth = require('../../middleware/auth.js')
  const router = express.Router({
    mergeParams: true
  });
  router.post("/addLabel", async (req, res) => {
    const model = await blogLabel.create(req.body);
    res.send(model);
  })
  router.get("/listLabel/:pageNum", async (req, res) => {
    const pageNum = req.params.pageNum
    if (pageNum === "-1") {
      const model = await blogLabel.find()
      return res.send(model);
    } else if (pageNum === "count") {
      const total = await blogLabel.find().count();
      res.send({
        total
      });
    } else {
      const skip = (pageNum - 1) * 5
      const model = await blogLabel.find().skip(skip).limit(5);
      res.send(model);
    }
  })
  router.get("/findLabelById/:id", async (req, res) => {
    const id = req.params.id
    const model = await blogLabel.findById(id);
    res.send(model);
  })
  router.put("/updateLabelById/:id", async (req, res) => {
    const id = req.params.id
    const model = await blogLabel.findByIdAndUpdate(id, req.body);
    res.send(model);
  })
  router.delete("/delLabelById/:id", async (req, res) => {
    const id = req.params.id
    const model = await blogLabel.findByIdAndDelete(id);
    res.send({
      success: true
    });
  })
  router.get('/listBlogByLabelId/:id', async (req, res) => {
    const cats = await blogLabel.find({
      _id: req.params.id
    }).populate('blogList').lean();
    res.send(cats);
  })

  app.use("/ly/api", auth(), router)
  app.use("/ly/web/api", router)
};