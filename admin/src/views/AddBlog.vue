<template>
  <div>
    <h3>{{id?"编辑":"新建"}}博客</h3>
    <el-form ref="form" label-width="80px" size="mini">
      <el-form-item label="博客名称">
        <el-input v-model="blog.title"></el-input>
      </el-form-item>
      <el-form-item label="博客描述">
        <el-input v-model="blog.description"></el-input>
      </el-form-item>
      <el-form-item label="博客类型">
        <el-select v-model="blog.labels" placeholder="请选择博客标签" multiple>
          <el-option v-for="(label, index) in labels" :key="index" :label="label.label" :value="label._id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="博客内容">
        <mavon-editor v-model="blog.body" ref="md" @change="change" @imgAdd="$imgAdd" style="min-height: 600px" />
      </el-form-item>
      <el-form-item size="large">
        <el-button type="primary" @click="addBlog">保存</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

export default {
  props: {
    id: String
  },
  components: {
    mavonEditor
  },
  data () {
    return {
      labels: [],
      blog: {},
    };
  },
  created () {
    this.getBlogLabels();
    this.id && this.getBlogById();
  },
  methods: {
    $imgAdd (pos, file) {
      let formdata = new FormData();
      formdata.append("file", file);
      this.$http.post("upload", formdata).then(res => {
        this.$refs.md.$img2Url(pos, res.data.url);
      }).catch(err => {
        console.log(err)
      })
    },
    change (value, render) {
      this.$set(this.blog, 'html', render)
    },
    async getBlogById () {
      const result = await this.$http.get(`/getBlogById/${this.id}`);
      this.blog = result.data;
      this.blog.labels = result.data.labels.map(currentValue => {
        return currentValue._id;
      });
    },
    async addBlog () {
      if (!this.id) {
        await this.$http.post("/addBlog", this.blog);
      } else {
        await this.$http.put(`/updateBlogById/${this.id}`, this.blog);
      }
      this.$router.push("/listBlog");
    },
    async getBlogLabels () {
      const result = await this.$http.get("/listLabel/-1");
      this.labels = result.data;
    }
  }
};
</script>
