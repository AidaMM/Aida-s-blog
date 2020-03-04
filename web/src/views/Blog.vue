<template>
  <div id="top">
    <b-navbar toggleable="lg" variant="faded" type="dark" class="shadow fixed-top">
      <b-navbar-brand href="#">博客</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item to="/blog">最新博客</b-nav-item>
          <b-nav-item
            v-for="(label, index) in labels"
            :key="index"
            @click="getBlogByLabel(label._id,index)"
            :class="{'active':labelIndex==index}"
          >{{ label.label }}</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <div class="container-fluid">
      <b-row class>
        <b-col md="2" class="ov-y pr-0 mt-6">
          <b-list-group>
            <b-list-group-item
              v-for="(label, index) in labels"
              :key="index"
              @click="getBlogByLabel(label._id,index)"
              :class="{'active':labelIndex==index}"
            >{{ label.label }}</b-list-group-item>
          </b-list-group>
        </b-col>
        <b-col md="9" class="mt-6 ml">
          <router-view :blogList="blogList" />
        </b-col>
        <b-col md="1" class="mt-6">
          <b-button-group
            vertical
            class="pr-0 position-fixed mb-0"
            v-show="$route.path == '/blogContent'"
          >
            <b-button variant="danger" class="mb-2">打赏</b-button>
            <b-button variant="primary">点赞</b-button>
            <b-dropdown split text="分享" variant="primary">
              <b-dropdown-item class="abc" href="#">微信</b-dropdown-item>
              <b-dropdown-item class="abc" href="#">微博</b-dropdown-item>
              <b-dropdown-item class="abc" href="#">QQ</b-dropdown-item>
            </b-dropdown>
          </b-button-group>
        </b-col>
      </b-row>
      <b-button variant="warning" class="back" href="#top">顶部</b-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isHovered: false,
      labels: [],
      blogList: [],
      labelIndex: 0
    };
  },
  created() {
    this.getAllLabels();
  },
  methods: {
    hoverHandler(isHovered) {
      this.isHovered = isHovered;
    },
    async getAllLabels() {
      const result = await this.$http.get("/listLabel/-1");
      this.labels = result.data;
      this.getBlogByLabel(this.labels[0]._id, 0);
    },
    async getBlogByLabel(labelId, index) {
      this.labelIndex = index;
      const result2 = await this.$http.get(`/listBlog/${labelId}`);
      this.blogList = result2.data[0].blogList;
    }
  }
};
</script>

<style scoped>
.mt-6 {
  margin-top: 5rem;
}
@media (min-width: 768px) {
  .ov-y {
    position: fixed;
    height: 600px;
    overflow-y: auto;
  }
}
.back {
  position: fixed;
  bottom: 20px;
  right: 20px;
}
.ml {
  margin-left: 16.6%;
}
</style>
