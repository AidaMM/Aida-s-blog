<template>
  <div>
    <el-table :data="listLabel">
      <el-table-column prop="_id" label="_id" width="240"></el-table-column>
      <el-table-column prop="label" label="名称" width="220"></el-table-column>
      <el-table-column label="操作" width="420">
        <template slot-scope="scope">
          <el-button
            type="primary"
            icon="el-icon-edit"
            @click="$router.push(`/editBlogLabel/${scope.row._id}`)"
          ></el-button>
          <el-button type="danger" icon="el-icon-delete" @click="delLabelById(scope.row._id)"></el-button>
        </template>
      </el-table-column>
    </el-table>
    <div>
      <el-pagination
        layout="prev, pager, next"
        :page-size="pageSize"
        :total="total"
        :background="background"
        :current-page="currentPage"
        @prev-click="fetchlistLabelPage(currentPage-1)"
        @next-click="fetchlistLabelPage(currentPage+1)"
        @current-change="fetchlistLabelPage"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listLabel: [],
      total: 0,
      pageSize: 5,
      background: true,
      currentPage: 1
    };
  },
  created() {
    this.fetchlistLabelAll();
    this.fetchlistLabelPage(1);
  },
  methods: {
    async fetchlistLabelAll() {
      const result = await this.$http.get("/listLabel/count");
      this.total = result.data.total;
    },
    async fetchlistLabelPage(page) {
      this.currentPage = page;
      const result = await this.$http.get("/listLabel/" + page);
      this.listLabel = result.data;
    },
    async delLabelById(id) {
      this.$confirm("此操作将永久删除该标签, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async () => {
          await this.$http.delete("/delLabelById/" + id);
          this.$message({
            type: "success",
            message: "删除成功!"
          });
          this.fetchlistLabel();
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
