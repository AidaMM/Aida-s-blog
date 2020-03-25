<template>
  <div class="blogContent">
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

export default {
  props: {
    id: String
  },
  data () {
    return {
      blog: {},
      name: '',
      content: '',
      toolbarsFlag: false,
      ishljs: true
    }
  },
  created () {
    this.getBlog();
  },
  methods: {
    async getBlog () {
      if (this.id) {
        const result = await this.$http.get(`/getBlogById/${this.id}`);
        this.blog = result.data;
        this.blog.body = this.blog.body.replace('<img src', '<img class="blogImg" src');
      }
    },
    async addComment () {
      if (window.confirm("确定发布评论吗?") && this.content && this.name) {
        await this.$http.post(`/addComment`, {
          name: this.name,
          content: this.content,
          blogId: this.blog._id
        });
        this.name = '';
        this.content = '';
        this.getBlog();
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
  flex-grow: 0.8;
  background-color: #fff;
  border-radius: 0.3rem;
  padding: 0.3rem;
  .blog_body {
    .body_detail {
      margin-bottom: 0.1rem;
      display: flex;
      justify-content: space-between;
      span {
        color: #dd2476;
        padding-left: 0.05rem;
      }
    }
    .body_aticle {
      img {
        max-width: 30%;
      }
    }
  }
  .blog_addComment {
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
      span {
        display: none;
        &.message {
          display: inline;
          padding-left: 0.1rem;
          color: red;
        }
      }
    }
  }
  .blog_comments {
    border-radius: 0.1rem;
    background-color: #eee;
    padding: 0.2rem;
    .blog_comment {
      display: flex;
      margin-top: 0.1rem;
      border-bottom: 1px dashed #111d5e;
      p {
        border-radius: 0.03rem;
        padding: 0.05rem;
        margin-right: 0.1rem;
        &:nth-child(1) {
          font-weight: 600;
          color: #111d5e;
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