module.exports = app => {
  const express = require("express");
  const blog = require("../../models/Blog");
  const auth = require('../../middleware/auth.js')
  const router = express.Router({
    mergeParams: true
  });
  router.post("/addBlog", async (req, res) => {
    const model = await blog.create({
      ...req.body,
      author: req.app.id
    });
    res.send(model);
  })
  router.get("/listBlog/:num", async (req, res) => {
    var skip = 0;
    if (req.params.num) {
      skip = parseInt(req.params.num);
    }
    const {} = req.body;
    const model = await blog.find().populate('labels', 'label').populate('author').populate('comments', '_id').
    sort({
      updatedAt: -1
    }).skip(skip).limit(12).lean();
    res.send(model);
  })
  router.get("/getBlogById/:id", async (req, res) => {
    const model = await blog.findByIdAndUpdate(req.params.id, {
      $inc: {
        count: 1
      }
    }).populate('comments').populate('author').populate('labels').lean();
    res.send(model);
  })
  router.get("/getBlogByTitle/:title", async (req, res) => {
    const keyword = req.params.title
    console.log(keyword);
    const reg = new RegExp(keyword, 'i')
    const model = await blog.find({
      $or: [{
          title: {
            $regex: reg
          }
        },
        {
          description: {
            $regex: reg
          }
        }
      ]
    })
    res.send(model);
  })
  router.put("/updateBlogById/:id", async (req, res) => {
    const model = await blog.findByIdAndUpdate(req.params.id, req.body);
    res.send(model);
  })
  router.delete("/delBlogById/:id", async (req, res) => {
    const id = req.params.id
    const model = await blog.findOneAndRemove(id);
    res.send({
      success: true
    });
  })
  const multer = require("multer");
  const upload = multer({
    dest: __dirname + "../../../uploads"
  });
  app.post("/ly/api/upload", upload.single("file"), async (req, res) => {
    const file = req.file;
    file.url = `http://localhost:3000/uploads/${file.filename}`;
    res.send(file);
  });

  app.use("/ly/api", auth(), router)
  app.use("/ly/web/api", router)
};