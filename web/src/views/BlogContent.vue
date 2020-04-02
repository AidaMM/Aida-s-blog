<template>
  <div class="blogContent">
<<<<<<< HEAD
    <Alert v-show="show" :message="message" @trigger="trigger" @commit="commit"></Alert>
=======
>>>>>>> d2d1ae01c40e4e7ede800de1bf237d6edf0b8330
    <div class="blog_body">
      <h2>{{blog.title}}</h2>
      <h4>博客描述:{{blog.description}}</h4>
      <div class="body_detail">
        <p>
          作者:
          <span>{{blog.author?blog.author.username:'无名氏'}}</span>
          标签:
          <button class="sm" v-for="label in blog.labels" :key="label._id" disabled>
            {{label.label}}
          </button>
        </p>
        <p>
          阅读:<span>{{blog.count}}</span>
          评论:<span>{{blog.comments?blog.comments.length:0}}</span>
          发布时间:<span>{{blog.updatedAt|formatDate}}</span>
        </p>
      </div>
      <div class="body_aticle">
        <p class="markdown-body" v-html="blog.html" v-highlight>
        </p>
      </div>

    </div>
    <div class="blog_addComment">
<<<<<<< HEAD
      <h3>添加评论</h3>
      <div class="name">
        <span>您的昵称:</span>
        <input type="text" class="lg" v-model="name" placeholder="输入您的昵称?" @focus="handlefocus" maxlength="10" />
      </div>
      <div class="content">
        <span>您的想法:</span>
        <input type="text" class="lg" v-model="content" placeholder="相对作者说什么？最多100字" @focus="handlefocus" maxlength="100" />
      </div>
      <div class="btn">
        <button @click="addComment">发表评论</button>
        <span ref="message">*请输入内容</span>
      </div>

    </div>

=======
      <p>添加评论</p>
      <div class="name">
        <input type="text" v-model="name" placeholder="输入您的昵称?" @focus="handlefocus" maxlength="10" />
      </div>
      <div class="content">
        <input type="text" v-model="content" placeholder="相对作者说什么？最多100字" @focus="handlefocus" maxlength="100" />
      </div>
      <div class="btn">
        <button @click="addComment">提交</button>
        <span ref="message">*请输入内容</span>
      </div>
    </div>

>>>>>>> d2d1ae01c40e4e7ede800de1bf237d6edf0b8330
    <div class="blog_comments">
      <h3>评论列表</h3>
      <div v-if="blog.comments?blog.comments.length>0:false">
        <div v-for="comment in blog.comments" :key="comment._id" class="blog_comment">
          <p>{{comment.name}} <span>说:</span></p>

          <p>{{comment.content}}</p>
          <p>{{comment.createdAt|formatDate}}</p>
        </div>
      </div>
      <p v-else>
        暂无评论
      </p>

    </div>
  </div>
</template>

<script>
<<<<<<< HEAD
import Alert from '../components/Alert';
=======

>>>>>>> d2d1ae01c40e4e7ede800de1bf237d6edf0b8330
export default {
  props: {
    id: String
  },
  data () {
    return {
      blog: {},
      name: '',
      content: '',
<<<<<<< HEAD
      show: false,
      message: ''
    }
  },
  components: {
    Alert
  },
=======
      toolbarsFlag: false,
      ishljs: true
    }
  },
>>>>>>> d2d1ae01c40e4e7ede800de1bf237d6edf0b8330
  created () {
    this.getBlog();
  },
  methods: {
<<<<<<< HEAD
    async commit () {
      await this.$http.post(`/addComment`, {
        name: this.name,
        content: this.content,
        blogId: this.blog._id
      });
      this.name = '';
      this.content = '';
      this.getBlog();
    },
    trigger (show) {
      this.show = show;
    },
=======
>>>>>>> d2d1ae01c40e4e7ede800de1bf237d6edf0b8330
    async getBlog () {
      if (this.id) {
        const result = await this.$http.get(`/getBlogById/${this.id}`);
        this.blog = result.data;
        this.blog.body = this.blog.body.replace('<img src', '<img class="blogImg" src');
      }
    },
    async addComment () {
<<<<<<< HEAD
      if (this.content && this.name) {
        this.message = "确定要提交评论吗？"
        this.show = true;
=======
      if (window.confirm("确定发布评论吗?") && this.content && this.name) {
        await this.$http.post(`/addComment`, {
          name: this.name,
          content: this.content,
          blogId: this.blog._id
        });
        this.name = '';
        this.content = '';
        this.getBlog();
>>>>>>> d2d1ae01c40e4e7ede800de1bf237d6edf0b8330
      } else {
        this.$refs.message.classList.add("message")
      }
    },
    handlefocus () {
      this.$refs.message.classList.remove("message")
    }

  }

}
</script>

<style lang="scss">
.blogContent {
<<<<<<< HEAD
  margin: 0 auto;
  padding-left: 0.2rem;
  width: 70%;
  .blog_body {
    padding: 0.3rem;
    background-color: #27273a;

=======
  flex-grow: 0.8;
  background-color: #fff;
  border-radius: 0.3rem;
  padding: 0.3rem;
  .blog_body {
>>>>>>> d2d1ae01c40e4e7ede800de1bf237d6edf0b8330
    .body_detail {
      margin-bottom: 0.1rem;
      display: flex;
      justify-content: space-between;
<<<<<<< HEAD

      span {
        color: #009688;
        font-weight: 600;
=======
      span {
        color: #dd2476;
>>>>>>> d2d1ae01c40e4e7ede800de1bf237d6edf0b8330
        padding-left: 0.05rem;
      }
    }
    .body_aticle {
<<<<<<< HEAD
      color: #919cb9;
=======
>>>>>>> d2d1ae01c40e4e7ede800de1bf237d6edf0b8330
      img {
        max-width: 30%;
      }
    }
  }
  .blog_addComment {
<<<<<<< HEAD
    border-top: 1px solid #666;
    border-bottom: 1px solid #666;
    background-color: #27273a;
    padding: 0.3rem;
    margin: 0.4rem 0;
    .content {
      margin: 0.1rem 0;
    }
    .btn {
      width: 20%;
      margin: 0 auto;
      button {
        margin: 0;
        width: 1.5rem;
      }
=======
    background-color: #eee;
    display: grid;
    grid-template-columns: 0.2rem 1fr;
    grid-template-areas: "text visterName" "text content" "text btn";
    grid-row-gap: 0.1rem;
    border-radius: 0.1rem;
    padding: 0.1rem;
    margin: 0.2rem 0;
    p {
      grid-area: text;
    }
    .name {
      grid-area: visterName;
    }
    .content {
      grid-area: content;
      input {
        width: 95%;
      }
    }
    .btn {
      grid-area: btn;
>>>>>>> d2d1ae01c40e4e7ede800de1bf237d6edf0b8330
      span {
        display: none;
        &.message {
          display: inline;
          padding-left: 0.1rem;
<<<<<<< HEAD
          color: #ffca28;
=======
          color: red;
>>>>>>> d2d1ae01c40e4e7ede800de1bf237d6edf0b8330
        }
      }
    }
  }
  .blog_comments {
<<<<<<< HEAD
    background-color: #27273a;
    padding: 0.1rem 0.1rem 0.3rem 0.1rem;
    .blog_comment {
      display: flex;
      margin-top: 0.1rem;
      border-bottom: 1px dashed #a9aabc;
      p {
=======
    border-radius: 0.1rem;
    background-color: #eee;
    padding: 0.2rem;
    .blog_comment {
      display: flex;
      margin-top: 0.1rem;
      border-bottom: 1px dashed #111d5e;
      p {
        border-radius: 0.03rem;
>>>>>>> d2d1ae01c40e4e7ede800de1bf237d6edf0b8330
        padding: 0.05rem;
        margin-right: 0.1rem;
        &:nth-child(1) {
          font-weight: 600;
<<<<<<< HEAD
          color: #009688;
=======
          color: #111d5e;
>>>>>>> d2d1ae01c40e4e7ede800de1bf237d6edf0b8330
          display: 1;
        }
        &:nth-child(2) {
          display: 8;
        }
        &:nth-child(3) {
          display: 1;
        }
      }
    }
  }
}
<<<<<<< HEAD
.hljs {
  background-color: #011627;
}
.markdown-body .highlight pre,
.markdown-body pre {
  background-color: #011627;
  font-size: 0.2rem;
}
.markdown-body {
  color: #919cb9;
}
=======
>>>>>>> d2d1ae01c40e4e7ede800de1bf237d6edf0b8330
@media screen and (max-width: 768px) {
  .blogContent {
    width: 100vw;
    padding: 0.2rem;
    .body_detail {
      flex-direction: column;
      p {
        margin-top: 0.09rem;
      }
    }
  }
}
</style>