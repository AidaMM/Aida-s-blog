<template>
  <el-form ref="form" label-width="120px" @submit.native.prevent>
    <h3>{{id?'编辑':'新建'}}管理员</h3>
    <el-form-item label="管理员名称">
      <el-input v-model="user.username"></el-input>
    </el-form-item>
    <el-form-item label="管理员密码">
      <el-input v-model="user.password"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="addAdminUser">保存</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  props: {
    id: String
  },
  data () {
    return {
      user: {}
    };
  },
  methods: {
    addAdminUser () {
      if (this.user.username && this.user.password) {
        if (this.id) {
          this.$http.put(`/updateUserById/${this.id}`, this.user);
        } else {
          this.$http.post("/addUser", this.user);
        }
        this.$router.push("/listUser");
      }
    },
    async getUser () {
      const result = await this.$http.get(`/findUserById/${this.id}`);
      this.user = result.data;
    }
  },
  created () {

    this.id && this.getUser();
  }
};
</script>
