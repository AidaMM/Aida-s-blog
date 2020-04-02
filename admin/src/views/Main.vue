<template>
  <el-container style="height: 500px; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu router :default-active="$route.path">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-s-order"></i>博客分类管理
          </template>
          <el-menu-item-group>
            <el-menu-item index="/addBlogLabel">新建博客分类</el-menu-item>
            <el-menu-item index="/listBlogLabel">博客分类列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-notebook-1"></i>博客内容管理
          </template>
          <el-menu-item-group>
            <el-menu-item index="/addBlog">新建博客</el-menu-item>
            <el-menu-item index="/listBlog">博客列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-s-comment"></i>博客评论管理
          </template>
          <el-menu-item-group>
            <el-menu-item index="/listComment">博客评论列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-chat-dot-round"></i>网站留言管理
          </template>
          <el-menu-item-group>
            <el-menu-item index="/listMessage">留言列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-chat-dot-round"></i>管理员
          </template>
          <el-menu-item-group>
            <el-menu-item index="/addUser">新建管理员</el-menu-item>
            <el-menu-item index="/listUser">管理员列表</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>
<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>

<script>
export default {
  data () {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      tableData: Array(20).fill(item)
    };
  }
};
</script>
