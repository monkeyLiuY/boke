
<template>
  <div class="nav-box">
    <ul>
      <li v-for="item in navbar_list" :key="item.name">
        <router-link :to="'/'+item.path">{{item.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'navbar',
  data () {
    return {
      navbar_list:[
        { name: 'VUE', path: 'vue' },
        { name: '微信小程序', path: 'mini' },
        { name: 'HTML', path: 'html' },
        { name: 'CSS', path: 'css' },
        { name: 'JS', path: 'js' },
        { name: '关于我',path: 'about'}
      ]
    }
  }
}
</script>

<style scoped>
a{
  display: block;
  width: 100%;
  height: 100%;
  text-overflow:ellipsis;
  overflow:hidden;
  white-space:nowrap;
  padding: 2px;
}
  li{
    position: relative;
    list-style: none;
    text-align: center;
    padding: 8px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  .nav-box{
    position: fixed;
    top: 170px;
    left: 0;
    width: 60px;
    height: 300px;
    transition: .5s;
  }
  ul{
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    justify-content: space-around;
    align-content: center;
    border-right: 5px solid crimson;
  }
  .nav-box:hover{
    width: 120px;

  }
  li:hover{
    background: crimson;
    cursor: pointer;
  }
  li:hover::before{
    content: '';
    position: absolute;
    background: #222;
    width: 10px;
    height: 10px;
    top: -10px;
    left: calc(100% - 10px);
    border-radius: 50%;
    box-shadow: 5px 5px 0 crimson;
    z-index: 1;
    
  }
   li:hover::after{
    content: '';
    position: absolute;
    background: #222;
    width: 10px;
    height: 10px;
    bottom: -10px;
    left: calc(100% - 10px);
    border-radius: 50%;
    box-shadow: 5px -5px 0 crimson;
    z-index: 1;

  }
</style>
