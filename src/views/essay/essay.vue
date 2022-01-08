<template>
  <div class="essay" v-if="!$store.state.con_ess_switch">
    <p class="content-item">我是文章</p>
    <div class="btn iconfont icon-cross" @click="close"></div>
  </div>
</template>

<script>
export default {
  name: 'essay',
  data() {
    return {
      is_close: true
    }
  },
  methods:{
    close(){
      this.$store.state.con_ess_switch = true
    }
  }
} 
</script>

<style scoped>
  .essay{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(34, 34, 34, 0.829);
    width: 100%;
    height: 100vh;
  }
  .content-item{
    position: fixed;
    top: 130px;
    left: 200px;
    width: 65%;
    cursor: default;
    border: 1px solid #fff;
    border-radius: 5px;
    padding: 5px;
    box-sizing: border-box;
    background-clip: content-box;
    overflow: scroll;
  }
  .btn{
    position: fixed;
    top: 100px;
    left: calc(65% + 200px);
    height: 30px;
    width: 30px;
    font-size: 32px;
    cursor: pointer;
    transition: 1s;
    border-radius: 50%;
  }
 
  .btn:hover{
    transform:rotate(180deg);
  }
</style>