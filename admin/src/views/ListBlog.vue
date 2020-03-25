<template>
  <el-table :data="listBlog">
    <el-table-column prop="_id" label="_id" width="240"></el-table-column>
    <el-table-column prop="title" label="博客名称" width="220"></el-table-column>
    <el-table-column prop="description" label="描述" width="110"></el-table-column>
    <el-table-column prop="author.username" label="作者" width="110"></el-table-column>
    <el-table-column label="博客标签" prop="labels" width="220">
      <template slot-scope="scope">
        <el-tag type="info" v-for="(label,index) in scope.row.labels" :key="index">{{label.label}}</el-tag>
      </template>
    </el-table-column>
    <el-table-column label="操作" width="420">
      <template slot-scope="scope">
        <el-button type="primary" icon="el-icon-edit" @click="$router.push(`/editBlog/${scope.row._id}`)"></el-button>
        <el-button type="danger" icon="el-icon-delete" @click="delBlogById(scope.row._id)"></el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data () {
    return {
      listBlog: []
    };
  },
  created () {
    this.fetchlistBlog();
  },
  methods: {
    async fetchlistBlog () {
      const result = await this.$http.get("/listBlog");
      this.listBlog = result.data;
    },
    async delBlogById (id) {
      this.$confirm("此操作将永久删除该博客, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          await this.$http.delete("/delBlogById/" + id);
          this.$message({
            type: "success",
            message: "删除成功!"
          });
          this.fetchlistBlog();
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
    }
  }
};
</script>

<style></style>
