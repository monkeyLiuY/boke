<template>
  <div class="app">
    <navbar />
    <timer />
    <contents v-show="$store.state.con_ess_switch"/>
    <router-view></router-view>
  </div>
</template>
<script>
import navbar from './components/navbar/navbar.vue'
import timer from './components/timer/timer.vue'
import contents from './views/content/contents.vue'
export default {
  name: 'app',
  components: {
    navbar,
    timer,
    contents
  },
  data () {
    return {

    }
  }
}
</script>

<style>
@import url("./iconfont/iconfont.css");
 ::-webkit-scrollbar {
  /*隐藏滚轮*/
  display: none;
  }
html,body,.app{
  font-size: 14px;
  background-color: #222;
  color: #fff;
  box-sizing: border-box;
  background-clip: content-box;
  min-height: 100vh;
  width: 100%;
}
html,body,.app,div,ul,li,p,h1,h2,h3,h4,h5,h6{
  margin: 0;
  padding: 0;
  /* 禁止选中 */
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.router-link-active {
  text-decoration: none;
  color: #fff;
}
a {
  text-decoration: none;
  color: #fff;
}
</style>
