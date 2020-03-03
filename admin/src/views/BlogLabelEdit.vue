<template>
  <el-form ref="form" label-width="80px" @submit.native.prevent>
    <h3>{{id?'编辑':'新建'}}分类</h3>
    <el-form-item label="分类名称">
      <el-input v-model="label"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="addBlogLabel">保存</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  props: {
    id: String
  },
  data() {
    return {
      label: ""
    };
  },
  methods: {
    addBlogLabel() {
      if (this.label) {
        if (this.id) {
          this.$http.put(`/updateLabelById/${this.id}`, { label: this.label });
        } else {
          this.$http.post("/addLabel", { label: this.label });
        }
        this.$router.push("/listBlogLabel");
      }
    },
    async getBlogLabel() {
      const result = await this.$http.get(`/findLabelById/${this.id}`);
      this.label = result.data.label;
    }
  },
  created() {
    this.id && this.getBlogLabel();
  }
};
</script>
