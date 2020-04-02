<template>
  <div class="alert_container">
    <div class="alert_delog">
      <div class=" alert_title">
        <span>提示信息</span>
        <button @click="trigger(false,false)">
          X
        </button>
      </div>
      <div class="alert_message">{{message}}</div>
      <div class="btn">
        <button @click="trigger(false,false)">取消</button>
        <button @click="trigger(false,true)">确定</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    message: String
  },
  methods: {
    trigger (show, commit) {
      this.$emit("trigger", show, commit)
      if (commit) {
        this.$emit("commit");
      }
    }
  }
}
</script>

<style lang="scss">
.hide {
  display: none;
}
.alert_container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.8);
  font-size: 0.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .alert_delog {
    background-color: #fff;
    border-radius: 0.1rem;
    width: 40%;
    height: 2rem;
    display: flex;
    flex-direction: column;
    div {
      flex: 1;
      padding: 0.1rem 0.2rem;
      color: #000;
    }
    .alert_title {
      display: flex;
      justify-content: space-between;
      button {
        color: #27273a;
        background-color: #fff;
      }
    }
    .alert_message {
      text-align: center;
      border-top: 1px solid #eee;
      border-bottom: 1px solid #eee;
      color: #666;
    }
    .btn {
      text-align: right;
    }
  }
}
</style>