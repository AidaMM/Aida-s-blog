<template>
  <div>
    <el-table :data="listComment">
      <el-table-column prop="_id" label="_id" width="240"></el-table-column>
      <el-table-column prop="name" label="游客" width="240"></el-table-column>
      <el-table-column prop="content" label="留言内容" width="240"></el-table-column>
      <el-table-column prop="email" label="邮箱" width="220"></el-table-column>
      <el-table-column label="操作" width="420">
        <template slot-scope="scope">
          <el-button type="danger" icon="el-icon-delete" @click="delCommentById(scope.row._id)"></el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listLeaveMessage: []
    };
  },
  created() {
    this.fetchlistMessage();
  },
  methods: {
    async fetchlistMessage() {
      const result = await this.$http.get("/listLeaveMessage");
      this.listComment = result.data;
    },
    async delCommentById(id) {
      this.$confirm("此操作将永久删除该留言, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          await this.$http.delete("/delLeaveMessage/" + id);
          this.$message({
            type: "success",
            message: "删除成功!"
          });
          this.fetchlistMessage();
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

<style>
</style>
