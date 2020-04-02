<template>
  <div class="login-container">
    <el-card header="请先登录" class="login-card">
      <el-form @submit.native.prevent="login">
        <el-form-item label="用户名">
          <el-input v-model="model.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="model.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" native-type="submit">登录</el-button>
        </el-form-item>

      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      model: {

      }
    }
  },
  methods: {
    async  login () {
<<<<<<< HEAD
      const res = await this.$http.post('../login', this.model);
=======
      const res = await this.$http.post('login', this.model);
>>>>>>> d2d1ae01c40e4e7ede800de1bf237d6edf0b8330
      localStorage.token = res.data.token;
      this.$router.push('/')
      this.$message({
        type: 'success',
        message: '登录成功'
      })
    }
  },
} 
</script>

<style>
.login-card {
  width: 25rem;
  margin: 6rem auto;
}
</style>